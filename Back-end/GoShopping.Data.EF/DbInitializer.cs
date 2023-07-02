using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoShopping.Data.Entities;
using GoShopping.Data.Enums;
using ShopSmart.Utilities.Constants;

namespace GoShopping.Data.EF
{
	public class DbInitializer
	{
		private readonly AppDbContext _context;
		private UserManager<AppUser> _userManager;
        private RoleManager<AppRole> _roleManager;

        public DbInitializer(AppDbContext context, UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
		{
			_context = context;
			_userManager = userManager;
			_roleManager = roleManager;
		}

		public async Task Seed()
		{
			try
            {
                if (!_roleManager.Roles.Any())
				{
                    await _roleManager.CreateAsync(new AppRole()
                    {
                        Name = "Admin",
                        NormalizedName = "Admin",
                        Description = "Top manager"
                    });
                    await _roleManager.CreateAsync(new AppRole()
                    {
                        Name = "Staff",
                        NormalizedName = "Staff",
                        Description = "Staff"
                    });
                    await _roleManager.CreateAsync(new AppRole()
                    {
                        Name = "Customer",
                        NormalizedName = "Customer",
                        Description = "Customer"
                    });
                }

                if (!_userManager.Users.Any())
                {
                    await _userManager.CreateAsync(new AppUser()
                    {
                        UserName = "admin",
                        FullName = "Administrator",
                        Email = "admin@gmail.com",
                        Balance = 0,
                        Avatar = "",
                        DateCreated = DateTime.Now,
                        DateModified = DateTime.Now,
                        Status = Status.Active
                    }, "123123qwe");
                    var user = await _userManager.FindByNameAsync("admin");
                    await _userManager.AddToRoleAsync(user, "Admin");
                }
                _context.SaveChanges();
            }
			catch (Exception e)
			{

				throw;
			}
		}

    }
}
