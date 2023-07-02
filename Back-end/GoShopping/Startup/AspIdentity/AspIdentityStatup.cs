using Microsoft.AspNetCore.Identity;
using GoShopping.Data.EF;
using GoShopping.Data.Entities;

namespace GoShopping.BackendAPI.Startup.AspIdentity
{
	public class AspIdentityStatup
	{
		public static void InitServices(IServiceCollection services)
		{
			services.AddIdentity<AppUser, AppRole>()
					.AddEntityFrameworkStores<AppDbContext>()
					.AddDefaultTokenProviders();

			// Configure Identity
			services.Configure<IdentityOptions>(options =>
			{
				// Password settings
				options.Password.RequireDigit = true;
				options.Password.RequiredLength = 6;
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = false;
				options.Password.RequireLowercase = false;

				// Lockout settings
				options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
				options.Lockout.MaxFailedAccessAttempts = 10;

				// User settings
				options.User.RequireUniqueEmail = true;
			});
		}
	}
}
