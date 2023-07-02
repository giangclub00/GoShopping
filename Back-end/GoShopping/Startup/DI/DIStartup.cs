using Microsoft.AspNetCore.Identity;
using GoShopping.Service.AutoMapper;
using GoShopping.Service.Interfaces;
using GoShopping.Data.EF;
using GoShopping.Data.Entities;
using GoShopping.Infrastructure.Interfaces;
using GoShopping.Service.Implementation;

namespace GoShopping.BackendAPI.Startup.DI
{
	public class DIStartup
	{
		public static void InitServices(IServiceCollection services)
		{
			services.AddScoped<UserManager<AppUser>, UserManager<AppUser>>();
			services.AddScoped<RoleManager<AppRole>, RoleManager<AppRole>>();
			services.AddScoped<ITokenService, TokenService>();

			services.AddScoped<DbInitializer>();


			services.AddSingleton(AutoMapperConfig.RegisterMappings().CreateMapper());


			services.AddTransient(typeof(IUnitOfWork), typeof(EFUnitOfWork));
			services.AddTransient(typeof(IRepository<,>), typeof(EFRepository<,>));

			//services.AddTransient<IProductService, ProductService>();
			//services.AddTransient<IProductCategoryService, ProductCategoryService>();
		}

		public static void InitRequestPipeline(WebApplication app)
		{

		}
	}
}
