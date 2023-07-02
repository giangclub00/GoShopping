//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata.Builders;
//using GoShopping.Data.EF.Extensions;
//using GoShopping.Data.Entities;

//namespace GoShopping.Data.EF.Configurations
//{
//    public class BlogTagConfiguration : DbEntityConfiguration<BlogTag>
//    {
//        public override void Configure(EntityTypeBuilder<BlogTag> entity)
//        {
//            entity.Property(c => c.TagId).HasMaxLength(50).IsRequired()
//            .IsUnicode(false).HasMaxLength(50);
//            // etc.
//        }
//    }
//}