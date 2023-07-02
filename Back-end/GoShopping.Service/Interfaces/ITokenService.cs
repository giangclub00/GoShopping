using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace GoShopping.Service.Interfaces
{
	public interface ITokenService
	{
		public string GenerateJwtToken(Guid id);
		public string ValidateJwtToken(string token);
	}
}
