﻿//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata.Builders;
//using System;
//using System.Collections.Generic;
//using System.Text;
//using GoShopping.Data.EF.Extensions;
//using GoShopping.Data.Entities;

//namespace GoShopping.Data.EF.Configurations
//{
//    public class ProductTagConfiguration : DbEntityConfiguration<ProductTag>
//    {
//        public override void Configure(EntityTypeBuilder<ProductTag> entity)
//        {
//            entity.Property(c => c.TagId).HasMaxLength(50).IsRequired()
//            .HasMaxLength(50).IsUnicode(false);
//            // etc.
//        }
//    }
//}
