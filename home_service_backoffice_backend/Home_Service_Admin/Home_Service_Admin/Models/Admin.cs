public class Admin
{
    public int Id { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    // Add this property:
    public string JwtToken { get; set; }
}