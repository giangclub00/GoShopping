using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using GoShopping.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using GoShopping.Data.Interfaces;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using GoShopping.Data.EF.Configurations;
using GoShopping.Data.EF.Extensions;

namespace GoShopping.Data.EF
{
	public class AppDbContext : IdentityDbContext<AppUser, AppRole, Guid>
	{
		public AppDbContext(DbContextOptions options) : base(options)
		{

		}

        public DbSet<Permission> Permissions { get; set; }
        public DbSet<SystemConfig> SystemConfigs { get; set; }
        public DbSet<Function> Functions { get; set; }
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<AppRole> AppRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
		{
			#region Identity Config

			builder.Entity<IdentityUserClaim<Guid>>().ToTable("AppUserClaims").HasKey(x => x.Id);

			builder.Entity<IdentityRoleClaim<Guid>>().ToTable("AppRoleClaims")
				.HasKey(x => x.Id);

			builder.Entity<IdentityUserLogin<Guid>>().ToTable("AppUserLogins").HasKey(x => x.UserId);

			builder.Entity<IdentityUserRole<Guid>>().ToTable("AppUserRoles")
				.HasKey(x => new { x.RoleId, x.UserId });

			builder.Entity<IdentityUserToken<Guid>>().ToTable("AppUserTokens")
			   .HasKey(x => new { x.UserId });

            #endregion Identity Config

            builder.AddConfiguration(new FunctionConfiguration());

            //base.OnModelCreating(builder);
        }

		public override int SaveChanges()
		{
			var modified = ChangeTracker.Entries().Where(e => e.State == EntityState.Modified || e.State == EntityState.Added);

			foreach (EntityEntry item in modified)
			{
				var changedOrAddedItem = item.Entity as IDateTracking;
				if (changedOrAddedItem != null)
				{
					if (item.State == EntityState.Added)
					{
						changedOrAddedItem.DateCreated = DateTime.Now;
					}
					changedOrAddedItem.DateModified = DateTime.Now;
				}
			}
			return base.SaveChanges();
		}
	}

	public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
	{
		public AppDbContext CreateDbContext(string[] args)
		{
			IConfiguration configuration = new ConfigurationBuilder()
				.SetBasePath(Directory.GetCurrentDirectory())
				.AddJsonFile("appsettings.json").Build();
			var builder = new DbContextOptionsBuilder<AppDbContext>();
			var connectionString = configuration.GetConnectionString("AppDbConnection");
			builder.UseSqlServer(connectionString);
			return new AppDbContext(builder.Options);
		}
	}
}
