namespace GoShopping.Service.ViewModels.User
{
	public class AuthenticateResponse
	{
		public Guid Id { get; set; }
		public string? Username { get; set; }
		public string? AccessToken { get; set; }
	}
}
