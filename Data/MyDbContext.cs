using Microsoft.EntityFrameworkCore;
using ChallengeVisionBox.Models;

namespace ChallengeVisionBox.Data;

public class MyDbContext : DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }
    public DbSet<User> Users { get; set; }
}
