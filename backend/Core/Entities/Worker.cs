using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;

[Table("Workers")]
public class Worker : BaseEntity
{
    [Column("name")]
    public string? Name { get; set; }
    [Column("surname")]
    public string? SurName { get; set; }
    [Column("age")]
    public int Age { get; set; }
    [Column("category_id")]
    public int CategoryId { get; set; }
    [Column("seniority")]
    public int Seniority { get; set; }
    [Column("salary")]
    public decimal Salary { get; set; }
    [Column("gender")]
    public char Gender { get; set; }
    [Column("date_of_birth")]
    public DateTime DateOfBirth { get; set; }
    [Column("administrator_id")]
    public int AdministratorId { get; set; }
}
