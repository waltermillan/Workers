using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;

[Table("Administrators")]
public class Administrator : BaseEntity
{
    [Column("user")]
    public string User { get; set; }
    [Column("password")]
    public string PassWord { get; set; }

    [Column("role_id")]
    public int RoleId { get; set; }
}
