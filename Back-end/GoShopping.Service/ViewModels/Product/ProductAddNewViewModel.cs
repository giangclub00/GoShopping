using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoShopping.Service.ViewModels.Product
{
	public class ProductAddNewViewModel
	{
		public string Name { get; set; }
		public string Image { get; set; }
		public decimal Price { get; set; }
		public string Description { get; set; }
		public int CategoryId { get; set; }

	}
}
