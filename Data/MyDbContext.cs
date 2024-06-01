using Microsoft.EntityFrameworkCore;
using UsersManagementSystem.Models;

namespace UsersManagementSystem.Data;

public class MyDbContext : DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }
    public DbSet<User> Users { get; set; }
}
