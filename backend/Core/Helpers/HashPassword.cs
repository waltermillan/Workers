using System.Security.Cryptography;
using System.Text;

namespace Core.Helpers;

public static class PasswordHasher
{
    public static string HashPassword(string password)
    {
        var hashBytes = SHA256.HashData(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(hashBytes);
    }

    public static bool VerifyPassword(string enteredPassword, string storedHash)
    {
        var enteredPasswordHash = HashPassword(enteredPassword);
        return enteredPasswordHash == storedHash;
    }
}
