namespace API.Responses;

public class ApiResponse<T>
{
    public int Code { get; set; }
    public bool Authenticated { get; set; } = false;
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }
}
