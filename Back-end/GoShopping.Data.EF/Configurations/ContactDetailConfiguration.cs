﻿//using Microsoft.EntityFrameworkCore.Metadata.Builders;
//using System;
//using System.Collections.Generic;
//using System.Text;
//using GoShopping.Data.EF.Extensions;
//using GoShopping.Data.Entities;

//namespace GoShopping.Data.EF.Configurations
//{
//    public class ContactDetailConfiguration : DbEntityConfiguration<Contact>
//    {
//        public override void Configure(EntityTypeBuilder<Contact> entity)
//        {
//            entity.HasKey(c => c.Id);
//            entity.Property(c => c.Id).HasMaxLength(255).IsRequired();
//            // etc.
//        }
//    }
//}
