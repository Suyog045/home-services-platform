namespace Home_Service_Admin.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Email { get; set; } = null!; // Not nullable
        public string PasswordHash { get; set; } = null!; // Not nullable
        public string? JwtToken { get; set; } // Nullable
    }
}
