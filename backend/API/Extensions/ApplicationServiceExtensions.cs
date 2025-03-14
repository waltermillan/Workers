using Core.Interfaces;
using Infrastructure.Repositories;
using Infrastructure.UnitOfWork;

namespace API.Extensions;
public static class ApplicationServiceExtensions
{
    public static void ConfigureCors(this IServiceCollection services) =>
        services.AddCors(options =>
        {
            string[] origins = { "http://localhost:4200", "http://localhost:5036" };
            options.AddPolicy("CorsPolicy", builder =>
                builder.WithOrigins(origins)  // Permite solo este origen en desarrollo
                    .WithMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .AllowAnyHeader());
        });

    public static void AddAplicacionServices(this IServiceCollection services)
    {
        services.AddScoped<IUnitOfWork, UnitOfWork>();
    }
}
