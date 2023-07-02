//using AutoMapper;
//using GoShopping.Service.ViewModels.Product;
//using GoShopping.Data.Entities;
//using GoShopping.Data.Enums;
//using GoShopping.Infrastructure.Interfaces;
//using ShopSmart.Utilities.Constants;
//using ShopSmart.Utilities.Dtos;
//using ShopSmart.Utilities.Helpers;
//using GoShopping.Service.Interfaces;
//using Microsoft.AspNetCore.Http;

//namespace GoShopping.Service.Implementation
//{
//	public class ProductService : IProductService
//	{
//		private IRepository<Product, int> _productRepository;
//		private IRepository<Tag, string> _tagRepository;
//		private IRepository<ProductTag, int> _productTagRepository;
//		private IRepository<ProductQuantity, int> _productQuantityRepository;
//		private IRepository<ProductImage, int> _productImageRepository;
//		private IRepository<WholePrice, int> _wholePriceRepository;
//		private readonly IMapper _mapper;
//		private IUnitOfWork _unitOfWork;

//		public ProductService(IRepository<Product, int> productRepository,
//			IRepository<Tag, string> tagRepository,
//			IRepository<ProductQuantity, int> productQuantityRepository,
//			IRepository<ProductImage, int> productImageRepository,
//			IRepository<WholePrice, int> wholePriceRepository,
//		IUnitOfWork unitOfWork,
//		IRepository<ProductTag, int> productTagRepository, IMapper mapper)
//		{
//			_productRepository = productRepository;
//			_tagRepository = tagRepository;
//			_productQuantityRepository = productQuantityRepository;
//			_productTagRepository = productTagRepository;
//			_wholePriceRepository = wholePriceRepository;
//			_productImageRepository = productImageRepository;
//			_unitOfWork = unitOfWork;
//			_mapper = mapper;
//		}



//		public void Save()
//		{
//			_unitOfWork.Commit();
//		}

//		public List<ProductViewModel> GetAll()
//		{
//			var query = _productRepository.FindAll(x => x.ProductCategory);
//			var items = query.Select(p => _mapper.Map<Product, ProductViewModel>(p)).ToList();
//			return items;
//		}

//		public PagedResult<ProductViewModel> GetAllPaging(int? categoryId, string keyword, int page, int pageSize)
//		{
//			throw new NotImplementedException();
//		}

//		public ProductViewModel Add(ProductViewModel product)
//		{
//			_productRepository.Add(_mapper.Map<ProductViewModel, Product>(product));
//			return product;
//		}

//		public void Update(ProductViewModel product)
//		{
//			product.SeoKeywords = "";
//			product.SeoAlias = "";
//			product.SeoDescription = "";
//			product.SeoPageTitle = "";
//			product.Status = Status.InActive;
//			_productRepository.Update(_mapper.Map<ProductViewModel, Product>(product));
//		}

//		public void Delete(int id)
//		{
//			_productRepository.Remove(id);
//		}

//		public void DeleteMulti(int[] ids)
//		{
//			var listWillDeleted = new List<Product>();
//			foreach (var id in ids)
//			{
//				var product = _productRepository.FindById(id);
//				listWillDeleted.Add(product);
//			}
//			_productRepository.RemoveMultiple(listWillDeleted);
//		}

//		public ProductViewModel GetById(int id)
//		{
//			throw new NotImplementedException();
//		}

//		public void ImportExcel(string filePath, int categoryId)
//		{
//			throw new NotImplementedException();
//		}

//		public void Dispose()
//		{
//			GC.SuppressFinalize(this);
//		}

//		public void SaveFile(IFormFile file, string path)
//		{
//			// create file name
//			string filename = $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";

//			// check route, if not create a directory
//			if (!Directory.Exists(path))
//			{
//				Directory.CreateDirectory(path);
//			}

//			// create file route
//			string fileRoute = Path.Combine(path, filename);

//			// using file stream to copy file
//			using (FileStream fs = System.IO.File.Create(fileRoute))
//			{
//				file.OpenReadStream().CopyToAsync(fs);
//			}
//		}
//	}
//}