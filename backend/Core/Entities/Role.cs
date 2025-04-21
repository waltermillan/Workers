using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;

[Table("Roles")]
public class Role : BaseEntity
{
    [Column("name")]
    public string Name { get; set; }
}
