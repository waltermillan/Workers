namespace API.Responses;

/*
    Factory Method Pattern

    The Factory Method pattern is a creational pattern that defines an interface for creating objects, 
    but allows subclasses (or static helpers, in this case) to alter the type of objects that are created.

    In your case: Your ApiResponseFactory class acts as a standardised response factory (ApiResponse<T>), 
    hiding the details of how they are constructed internally and giving you simple methods like:

    Success(...)

    Fail(...)
*/
public static class ApiResponseFactory
{
    public static ApiResponse<T> Success<T>(T data, string message = "Request succeeded", bool authenticated = true, int code = 0)
    {
        return new ApiResponse<T>
        {
            Code = code,
            Authenticated = authenticated,
            Message = message,
            Data = data
        };
    }

    public static ApiResponse<T> Fail<T>(string message, int code = 500, bool authenticated = false)
    {
        return new ApiResponse<T>
        {
            Code = code,
            Authenticated = authenticated,
            Message = message,
            Data = default
        };
    }
}
