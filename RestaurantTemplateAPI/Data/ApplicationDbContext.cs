using Microsoft.EntityFrameworkCore;
using RestaurantTemplateAPI.Models;

namespace RestaurantTemplateAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {
        }
        public DbSet<MenuCategory> MenuCategories { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
    }
}
