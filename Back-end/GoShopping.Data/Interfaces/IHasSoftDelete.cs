using System;
using System.Collections.Generic;
using System.Text;

namespace GoShopping.Data.Interfaces
{
	public interface IHasSoftDelete
	{
		bool IsDeleted { set; get; }
	}
}
