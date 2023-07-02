using Microsoft.AspNetCore.Hosting;
using GoShopping.BackendAPI.Authorization;
using GoShopping.BackendAPI.Helpers;
using GoShopping.BackendAPI.Startup.AspIdentity;
using GoShopping.BackendAPI.Startup.DI;
using GoShopping.BackendAPI.Startup.Swagger;
using System;
using GoShopping.Data.EF;
using Microsoft.EntityFrameworkCore;
using ShopSmart.Utilities.Helpers;

var builder = WebApplication.CreateBuilder(args);

// add services to DI container
{
    var services = builder.Services;
    services.AddCors();

    services.AddDbContext<AppDbContext>(options =>
                   options.UseSqlServer(builder.Configuration.GetConnectionString("AppDbConnection"),
                       b => b.MigrationsAssembly("GoShopping.Data.EF")));

    // configure strongly typed settings object
    services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

    // add CustomAuthorizeAttribute to all controllers and actions => all request have to call this method
    services.AddControllers(x => x.Filters.Add<CustomAuthorizeAttribute>())
            .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
            });


    // Asp.net identity 
    AspIdentityStatup.InitServices(services);

    // Swagger
    SwaggerStartup.InitServices(services);

    // DI
    DIStartup.InitServices(services);


    services.AddLogging();
}
var app = builder.Build();


// Configure the HTTP request pipeline.
{
    if (builder.Environment.EnvironmentName == Environments.Development)
    {
        app.UseDeveloperExceptionPage();
    }

    // Swagger setup request pipeline
    SwaggerStartup.InitReqestPipeline(app);

    // use static file resources
    app.UseStaticFiles();

    // global cors policy
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

    /************* MIDDLEWARE *************/
    // middlewares important to set up authorization
    app.UseAuthentication();
    app.UseRouting();
    app.UseAuthorization();

    // global error handler
    //app.UseMiddleware<ErrorHandlerMiddleware>();

    //custom jwt auth middleware
    app.UseMiddleware<JwtMiddleware>();

    // END
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}").RequireAuthorization();
    });

}

// START UP
{
    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;

        try
        {
            var dbInitializer = services.GetService<DbInitializer>();
             dbInitializer.Seed().Wait();
        }
        catch (Exception ex)
        {
            var logger = services.GetService<ILogger<Program>>();
            logger.LogError(ex, "An error occurred while seeding the database");
        }
    }
}

app.Run();