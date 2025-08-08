using Home_Service_Admin.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Home_Service_Admin.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdminAuthController : ControllerBase
    {
        private readonly Services.AdminService _adminService;
        private readonly Services.JwtService _jwtService;

        public AdminAuthController(Services.AdminService adminService, Services.JwtService jwtService)
        {
            _adminService = adminService;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] AdminLoginDTO dto)
        {
            if (dto == null)
            {
                return BadRequest(new { message = "Request body is missing or malformed." });
            }

            var admin = _adminService.GetAdminByEmail(dto.Email);
            if (admin == null || !BCrypt.Net.BCrypt.Verify(dto.Password, admin.PasswordHash))
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            var token = _jwtService.GenerateToken(admin.Email);
            admin.JwtToken = token;

            return Ok(new { token });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] AdminRegisterDTO dto)
        {
            if (dto == null || string.IsNullOrEmpty(dto.Email) || string.IsNullOrEmpty(dto.Password))
            {
                return BadRequest(new { message = "Email and password are required." });
            }

            var existingAdmin = _adminService.GetAdminByEmail(dto.Email);
            if (existingAdmin != null)
            {
                return Conflict(new { message = "Admin already exists with this email." });
            }

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);

            var admin = new Admin
            {
                Email = dto.Email,
                PasswordHash = hashedPassword
            };

            _adminService.CreateAdmin(admin);

            return Ok(new { message = "Admin registered successfully." });
        }
    }
}
