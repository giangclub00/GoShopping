using System;
using System.Collections.Generic;
using System.Text;
using GoShopping.Data.Enums;

namespace GoShopping.Data.Interfaces
{
	public interface ISwitchable
	{
		Status Status { set; get; }
	}
}
