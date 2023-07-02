//using Microsoft.AspNetCore.Http;
//using GoShopping.Service.ViewModels.Product;
//using ShopSmart.Utilities.Dtos;

//namespace GoShopping.Service.Interfaces
//{
//	public interface IProductService : IDisposable
//	{
//		List<ProductViewModel> GetAll();

//		PagedResult<ProductViewModel> GetAllPaging(int? categoryId, string keyword, int page, int pageSize);

//		ProductViewModel Add(ProductViewModel product);

//		void Update(ProductViewModel product);

//		void Delete(int id);
//		void DeleteMulti(int[] id);

//		ProductViewModel GetById(int id);

//		void ImportExcel(string filePath, int categoryId);

//		void SaveFile(IFormFile file, string path);

//		void Save();


//	}
//}
