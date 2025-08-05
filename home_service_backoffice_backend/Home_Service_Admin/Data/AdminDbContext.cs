using Home_Service_Admin.Models;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace Home_Service_Admin.Data
{
    public class AdminDbContext : DbContext
    {
        public AdminDbContext(DbContextOptions<AdminDbContext> options) : base(options)
        {
        }
        public DbSet<Admin> Admins { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>().HasData(
                new Admin
                {
                    Id= 1,
                    Email = "admin@gmail.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("admin123"),
                    JwtToken = string.Empty // Initialize JwtToken as empty
                });
            base.OnModelCreating(modelBuilder);
        }
    }
}
