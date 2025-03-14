using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;

[Table("Workers")]
public class Worker : BaseEntity
{
    [Column("Name")]
    public string? Name { get; set; }
    [Column("SurName")]
    public string? SurName { get; set; }
    [Column("Age")]
    public int Age { get; set; }
    [Column("CategoryId")]
    public int CategoryId { get; set; }
    [Column("Seniority")]
    public int Seniority { get; set; }
    [Column("Salary")]
    public decimal Salary { get; set; }
    [Column("Gender")]
    public char Gender { get; set; }
    [Column("DateOfBirth")]
    public DateTime DateOfBirth { get; set; }
}
