using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;

[Table("Categories")]
public class Category : BaseEntity
{
    [Column("name")]
    public string? Name { get; set; }
}
