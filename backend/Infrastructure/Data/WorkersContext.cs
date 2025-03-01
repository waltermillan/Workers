using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace Infrastructure.Data
{
    public partial class WorkersContext : DbContext
    {
        private readonly IConfiguration _configuration;

        // Constructor modificado para recibir IConfiguration
        public WorkersContext(DbContextOptions<WorkersContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        public virtual DbSet<Worker>? Worker { get; set; }
        public virtual DbSet<Category>? Category { get; set; }
        public virtual DbSet<Administrator>? Administrator { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Worker>()
                .HasKey(c => c.Id);  // Define ID as the primary key (Worker)
            modelBuilder.Entity<Category>()
                .HasKey(c => c.Id);  // Define ID as the primary key (Category)
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Usamos la configuración del archivo appsettings.json para obtener la cadena de conexión
            var connectionString = _configuration.GetConnectionString("WorkersDbConnection");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
