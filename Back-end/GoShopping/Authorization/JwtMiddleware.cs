using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using GoShopping.Data.Entities;
using ShopSmart.Utilities.Helpers;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

public class JwtMiddleware
{
	private readonly RequestDelegate _next;
	private readonly AppSettings _appSettings;

	public JwtMiddleware(RequestDelegate next, IOptions<AppSettings> appSettings)
	{
		_next = next;
		_appSettings = appSettings.Value;
	}

	public async Task Invoke(HttpContext context, UserManager<AppUser> userService)
	{
		var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

		if (token != null)
			await attachUserToContextAsync(context, userService, token);

		await _next(context);
	}

	private async Task attachUserToContextAsync(HttpContext context, UserManager<AppUser> userService, string token)
	{
		try
		{
			var tokenHandler = new JwtSecurityTokenHandler();
			var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
			tokenHandler.ValidateToken(token, new TokenValidationParameters
			{
				ValidateIssuerSigningKey = true,
				IssuerSigningKey = new SymmetricSecurityKey(key),
				ValidateIssuer = false,
				ValidateAudience = false,
				// set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
				ClockSkew = TimeSpan.Zero
			}, out SecurityToken validatedToken);

			var jwtToken = (JwtSecurityToken)validatedToken;
			var id = Guid.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);

			// attach user to context on successful jwt validation
			AppUser user = await userService.FindByIdAsync(id.ToString());
			if (user != null)
			{
				context.Items["User"] = user;
			}
		}
		catch (Exception ex)
		{
			var a = ex;
			// do nothing if jwt validation fails
			// user is not attached to context so request won't have access to secure routes
		}
	}
}