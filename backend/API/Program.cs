using API.Extensions;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Serilog.Filters;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

var appName = builder.Configuration["SystemName:AppName"] ?? "WorkersApp";

// Clean up other logging providers
builder.Logging.ClearProviders();

// Configurar filtros de logging para ASP.NET Core y Entity Framework Core
builder.Logging.AddFilter("Microsoft", LogLevel.Warning); // Filters for the entire Microsoft part
builder.Logging.AddFilter("System", LogLevel.Warning); // Filters for System logs

// Configuring Serilog to write to file only
Log.Logger = new LoggerConfiguration()
    .WriteTo.File($"logs/{appName}-.log", rollingInterval: RollingInterval.Day) // Log in daily archive
    .Filter.ByExcluding(Matching.FromSource("Microsoft.EntityFrameworkCore")) // Exclude logs from Entity Framework Core
    .Filter.ByExcluding(Matching.FromSource("Microsoft.AspNetCore")) // Exclude logs from ASP.NET Core
    .CreateLogger();

builder.Logging.AddSerilog(); // Add Serilog as a log provider

builder.Services.AddAutoMapper(Assembly.GetEntryAssembly());

// Add services to the container.
builder.Services.ConfigureCors(builder.Configuration);
builder.Services.AddAplicacionServices();

builder.Services.AddControllers();

builder.Services.AddDbContext<WorkersContext>(options =>
{
    string connectionString = builder.Configuration.GetConnectionString("WorkersDbConnection");
    options.UseSqlServer(connectionString);
});

// Force automatically generated paths (as with [controller]) to be lowercase
builder.Services.AddRouting(options => options.LowercaseUrls = true);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var loggerFactory = services.GetRequiredService<ILoggerFactory>();
    try
    {
        var context = services.GetRequiredService<WorkersContext>();
        await context.Database.MigrateAsync();
    }
    catch (Exception ex)
    {
        var logger = loggerFactory.CreateLogger<Program>();
        logger.LogError(ex, "An error occurred during migration");
    }
}

app.UseCors("CorsPolicy");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();