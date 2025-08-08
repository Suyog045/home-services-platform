using Home_Service_Admin.Data;
using Home_Service_Admin.Models;

namespace Home_Service_Admin.Services
{
    public class AdminService
    {
        private readonly AdminDbContext _context;

        public AdminService(AdminDbContext context)
        {
            _context = context;
        }

        public Admin? GetAdminByEmail(string email)
        {
            // Filter out records where Email is null to avoid SqlNullValueException
            return _context.Admins.FirstOrDefault(a => a.Email != null && a.Email == email);
        }

        public void CreateAdmin(Admin admin)
        {
            _context.Admins.Add(admin);
            _context.SaveChanges();
        }
    }
}
