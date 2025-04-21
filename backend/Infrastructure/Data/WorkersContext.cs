using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Data;

public partial class WorkersContext : DbContext
{
    private readonly IConfiguration _configuration;

    public WorkersContext(DbContextOptions<WorkersContext> options, IConfiguration configuration)
        : base(options)
    {
        _configuration = configuration;
    }

    public virtual DbSet<Worker>? Worker { get; set; }
    public virtual DbSet<Category>? Category { get; set; }
    public virtual DbSet<Administrator>? Administrator { get; set; }
    public virtual DbSet<Role>? Role { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Worker>()
            .HasKey(c => c.Id);  // Define ID as the primary key (Worker)
        modelBuilder.Entity<Category>()
            .HasKey(c => c.Id);  // Define ID as the primary key (Category)
        modelBuilder.Entity<Administrator>()
            .HasKey(c => c.Id);  // Define ID as the primary key (Administrator)
        modelBuilder.Entity<Role>()
            .HasKey(c => c.Id);  // Define ID as the primary key (Role)
    }
}
