using Microsoft.EntityFrameworkCore;
using ComponentManagerApi.Models;

namespace ComponentManagerApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // This property represents our table in the database
        public DbSet<UiComponent> UiComponents { get; set; }
    }
}