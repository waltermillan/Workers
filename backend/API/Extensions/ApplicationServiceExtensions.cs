using API.Services;
using Core.Interfaces;
using Infrastructure.Helpers;
using Infrastructure.UnitOfWork;

namespace API.Extensions;
public static class ApplicationServiceExtensions
{
    public static void ConfigureCors(this IServiceCollection services, IConfiguration configuration) =>
        services.AddCors(options =>
        {
            string[] verbs = configuration.GetSection("CorsSettings:Methods").Get<string[]>();

            var origins = configuration.GetSection("CorsSettings:Origins").Get<string[]>();
            var policyName = configuration.GetSection("CorsSettings:PolicyName").Get<string>();

            options.AddPolicy(policyName, builder =>
                builder.WithOrigins(origins)  // Allows only these developing origins
                    .WithMethods(verbs)
                    .AllowAnyHeader());
        });

    public static void AddAplicacionServices(this IServiceCollection services)
    {
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IPasswordHasher, BcryptPasswordHasher>();
        services.AddScoped<WorkerDTOService>();
    }
}
