﻿using AutoMapper;
//using System;
//using System.Collections.Generic;
//using System.Text;

namespace GoShopping.Service.AutoMapper
{
	public class AutoMapperConfig
	{
		public static MapperConfiguration RegisterMappings()
		{
			return new MapperConfiguration(cfg =>
			{
				//cfg.AddProfile(new DomainToViewModelMappingProfile());
				//cfg.AddProfile(new ViewModelToDomainMappingProfile());
			});
		}
	}
}
