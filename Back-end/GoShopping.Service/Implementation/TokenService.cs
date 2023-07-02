﻿using GoShopping.Service.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ShopSmart.Utilities.Helpers;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GoShopping.Service.Implementation
{
	public class TokenService : ITokenService
	{
		private readonly AppSettings _appSettings;
		public TokenService(IOptions<AppSettings> appSettings)
		{
			_appSettings = appSettings.Value;
		}

		public string GenerateJwtToken(Guid id)
		{
			// generate token that is valid for 7 days
			var tokenHandler = new JwtSecurityTokenHandler();
			var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(new[] { new Claim("id", id.ToString()) }),
				Expires = DateTime.UtcNow.AddDays(7),
				SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
			};
			var token = tokenHandler.CreateToken(tokenDescriptor);
			return tokenHandler.WriteToken(token);
		}

		public string ValidateJwtToken(string token)
		{
			var tokenHandler = new JwtSecurityTokenHandler();
			var key = Encoding.ASCII.GetBytes(token);
			try
			{
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
				var userId = jwtToken.Claims.First(x => x.Type == "id").Value;

				// return user id from JWT token if validation successful
				return userId;
			}
			catch
			{
				// return null if validation fails
				return null;
			}
		}
	}
}
