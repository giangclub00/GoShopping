﻿namespace GoShopping.BackendAPI.Authorization
{
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Mvc;
	using Microsoft.AspNetCore.Mvc.Filters;
	using GoShopping.Data.Entities;

	[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
	public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
	{
		public void OnAuthorization(AuthorizationFilterContext context)
		{
			// skip authorization if action is decorated with [AllowAnonymous] attribute
			var allowAnonymous = context.ActionDescriptor.EndpointMetadata.OfType<AllowAnonymousAttribute>().Any();
			if (allowAnonymous)
				return;

			/* authorization */
			// Roles
			//var user = (AppUser)context.HttpContext.Items["User"];
			//if (user == null || (_roles.Any() && !_roles.Contains(user.Role)))
			//{
			//	// not logged in or role not authorized
			//	context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
			//}

			// User
			var user = (AppUser)context.HttpContext.Items["User"];
			if (user == null)
			{
				// not logged in
				context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
			}
		}

	}
}
