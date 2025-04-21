using Core.Interfaces;
using Serilog;

namespace Infrastructure.Logging;

public class SerilogLoggingService : ILoggingService
{
    public void LogInformation(string message)
    {
        Log.Information(message);
    }

    public void LogError(string message, Exception exception)
    {
        Log.Error(exception, message);
    }
}
