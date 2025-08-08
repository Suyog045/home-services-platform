using System.ComponentModel.DataAnnotations;

namespace Home_Service_Admin.DTOs
{
    public class AdminLoginDTO
    {
        [Required(ErrorMessage = "Email is required.")]
        [MinLength(1, ErrorMessage = "Email cannot be empty.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [MinLength(1, ErrorMessage = "Password cannot be empty.")]
        public string Password { get; set; }
    }

}
