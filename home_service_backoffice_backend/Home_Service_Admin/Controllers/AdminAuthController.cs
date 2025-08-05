using Home_Service_Admin.DTOs;
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
           var admin = _adminService.GetAdminByEmail(dto.Email);
            if (admin == null || !BCrypt.Net.BCrypt.Verify(dto.Password,admin.PasswordHash))
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }
            
            var token = _jwtService.GenerateToken(admin.Email);

            admin.JwtToken = token; 

            return Ok(new
            {
               token
            });
        }
    }
}
