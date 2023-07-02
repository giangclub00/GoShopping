//using System;
//using System.Collections.Generic;
//using System.Text;
//using Microsoft.EntityFrameworkCore.Metadata.Builders;
//using GoShopping.Data.EF.Extensions;
//using GoShopping.Data.Entities;
//using Microsoft.EntityFrameworkCore;

//namespace GoShopping.Data.EF.Configurations
//{
//    public class TagConfiguration : DbEntityConfiguration<Tag>
//    {
//        public override void Configure(EntityTypeBuilder<Tag> entity)
//        {
//            entity.Property(c => c.Id).HasMaxLength(50)
//                .IsRequired().IsUnicode(false).HasMaxLength(50);
//        }
//    }
//}
