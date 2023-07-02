using GoShopping.Service.Interfaces;
using GoShopping.Service.ViewModels.User;
using GoShopping.Data.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GoShopping.BackendAPI.Controllers
{
    public class UserController : ApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly ILogger<UserController> _logger;

        public UserController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenService tokenService, ILogger<UserController> logger) 
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _tokenService = tokenService;
        }

        /// <summary>
        /// Authnetication: When user login system
        /// </summary>
        /// <param name="userLoginViewModel"></param>
        /// <returns></returns>
        [HttpPost("authenticate")]
        [AllowAnonymous]
        public async Task<IActionResult> Authenticate([FromBody] UserLoginViewModel userLoginViewModel)
        {
            var userModel = await _userManager.FindByNameAsync(userLoginViewModel.Username);
            if (userModel == null)
            {
                return new BadRequestObjectResult(new { message = "User is not found !" });
            }
            var result = await _signInManager.PasswordSignInAsync(userLoginViewModel.Username, userLoginViewModel.Password, userLoginViewModel.RememberMe, lockoutOnFailure: false);

            // Check user logout
            if (result.IsLockedOut)
            {
                _logger.LogWarning("User account locked out.");
                return new BadRequestObjectResult(new { message = "User account locked out." });
            }

            if (result.Succeeded)
            {
                var accessToken = _tokenService.GenerateJwtToken(userModel.Id);
                var response = new AuthenticateResponse()
                {
                    Id = userModel.Id,
                    AccessToken = accessToken,
                    Username = userModel.UserName
                };
                _logger.LogInformation("User logged in.");
                return new OkObjectResult(response);
            }
            else
            {
                _logger.LogWarning("Invalid login attempt.");
                return new BadRequestObjectResult(new { message = "Invalid login attempt." });
            }
        }

    }
}
