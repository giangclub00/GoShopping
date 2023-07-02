//using AutoMapper;
//using GoShopping.Service.Interfaces;
//using GoShopping.Service.ViewModels.Product;
//using GoShopping.Data.Entities;
//using GoShopping.Infrastructure.Interfaces;

//namespace GoShopping.Service.Implementation
//{
//	public class ProductCategoryService : IProductCategoryService
//	{
//		private IRepository<ProductCategory, int> _productCategoryRepository;
//		private IUnitOfWork _unitOfWork;
//		private readonly IMapper _mapper;

//		public ProductCategoryService(IRepository<ProductCategory, int> productCategoryRepository,
//			IUnitOfWork unitOfWork, IMapper mapper)
//		{
//			_productCategoryRepository = productCategoryRepository;
//			_unitOfWork = unitOfWork;
//			_mapper = mapper;
//		}

//		public ProductCategoryViewModel Add(ProductCategoryViewModel productCategoryVm)
//		{
//			throw new NotImplementedException();
//		}

//		public void Update(ProductCategoryViewModel productCategoryVm)
//		{
//			throw new NotImplementedException();
//		}

//		public void Delete(int id)
//		{
//			throw new NotImplementedException();
//		}

//		public List<ProductCategoryViewModel> GetAll()
//		{
//			var productCategories = _productCategoryRepository.FindAll().Select(c => _mapper.Map<ProductCategoryViewModel>(c)).ToList();
//			return productCategories;
//		}

//		public List<ProductCategoryViewModel> GetAll(string keyword)
//		{
//			throw new NotImplementedException();
//		}

//		public List<ProductCategoryViewModel> GetAllByParentId(int parentId)
//		{
//			throw new NotImplementedException();
//		}

//		public ProductCategoryViewModel GetById(int id)
//		{
//			throw new NotImplementedException();
//		}

//		public void UpdateParentId(int sourceId, int targetId, Dictionary<int, int> items)
//		{
//			throw new NotImplementedException();
//		}

//		public void ReOrder(int sourceId, int targetId)
//		{
//			throw new NotImplementedException();
//		}

//		public List<ProductCategoryViewModel> GetHomeCategories(int top)
//		{
//			throw new NotImplementedException();
//		}

//		public void Save()
//		{
//			_unitOfWork.Commit();
//		}
//	}
//}