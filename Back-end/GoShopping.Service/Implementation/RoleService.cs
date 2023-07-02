//using AutoMapper;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.EntityFrameworkCore;
//using GoShopping.Service.Interfaces;
//using GoShopping.Data.Entities;
//using GoShopping.Infrastructure.Interfaces;

//namespace GoShopping.Service.Implementation
//{
//	public class RoleService : IRoleService
//	{
//		private RoleManager<AppRole> _roleManager;
//		private IRepository<Function, string> _functionRepository;
//		private IRepository<Permission, int> _permissionRepository;

//		public RoleService(RoleManager<AppRole> roleManager,
//		 IRepository<Function, string> functionRepository,
//		 IRepository<Permission, int> permissionRepository)
//		{
//			_roleManager = roleManager;
//			_functionRepository = functionRepository;
//			_permissionRepository = permissionRepository;
//		}
//		public Task<bool> CheckPermission(string functionId, string action, string[] roles)
//		{
//			var functions = _functionRepository.FindAll();
//			var permissions = _permissionRepository.FindAll();
//			var query = from f in functions
//						join p in permissions on f.Id equals p.FunctionId
//						join r in _roleManager.Roles on p.RoleId equals r.Id
//						where roles.Contains(r.Name) && f.Id == functionId
//						&& ((p.CanCreate && action == "Create")
//						|| (p.CanUpdate && action == "Update")
//						|| (p.CanDelete && action == "Delete")
//						|| (p.CanRead && action == "Read"))
//						select p;
//			return query.AnyAsync();
//		}
//	}
//}
