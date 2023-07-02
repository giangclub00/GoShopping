using Microsoft.AspNetCore.Authorization;
using Microsoft.Build.Evaluation;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace GoShopping.BackendAPI.Startup.Swagger
{
	public class SwaggerStartup
	{
		public static void InitServices(IServiceCollection services)
		{
			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo
				{
					Version = "v1",
					Title = "Shop Smart Project",
					Description = "Shop Smart API Swagger surface",
					Contact = new OpenApiContact
					{
						Name = "Giang",
						Email = "giangclub00@gmail.com",
						//Url = new Uri("http://www.tedu.com.vn")
					},
					License = new OpenApiLicense
					{
						Name = "MIT",
						//Url = new Uri("https://github.com/teduinternational/teducoreapp")
					}
				});

				c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
				{
					Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
	                      Enter 'Bearer' [space] and then your token in the text input below.
	                      \r\n\r\nExample: 'Bearer 12345abcdef'",
					Name = "Authorization",
					In = ParameterLocation.Header,
					Type = SecuritySchemeType.ApiKey,
					Scheme = "Bearer",
				});

				c.AddSecurityRequirement(new OpenApiSecurityRequirement()
				{
					{
						new OpenApiSecurityScheme
						{
							Reference = new OpenApiReference
					  {
						Type = ReferenceType.SecurityScheme,
						Id = "Bearer"
					  },
					  Scheme = "oauth2",
					  Name = "Bearer",
					  In = ParameterLocation.Header,

				  },
					new List<string>()
				  }
				});

				//var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
				//var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
				//c.IncludeXmlComments(xmlPath);
			});
		}

		public static void InitReqestPipeline(WebApplication app)
		{
			app.UseSwagger();
			app.UseSwaggerUI(s =>
			{
				s.SwaggerEndpoint("/swagger/v1/swagger.json", "Project API v1.1");
			});
		}
	}
}
