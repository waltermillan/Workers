namespace Core.Interfaces;

public interface ILoggingService
{
    void LogInformation(string message);
    void LogError(string message, Exception exception);
}
