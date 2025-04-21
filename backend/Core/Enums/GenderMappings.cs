namespace Core.Enums;

public static class GenderMappings
{
    public static readonly Dictionary<Gender, string> GenderToString = new Dictionary<Gender, string>
    {
        { Gender.Masculino, "Masculino" },
        { Gender.Femenino, "Femenino" }
    };
}
