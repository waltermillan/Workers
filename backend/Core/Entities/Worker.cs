using System;
using System.Collections.Generic;

namespace Core.Entities;

public class Worker : BaseEntity
{
    public string? Name { get; set; }
    public string? SurName { get; set; }
    public int Age { get; set; }
    public int CategoryId { get; set; }
    public int Seniority { get; set; }
    public decimal Salary { get; set; }
    public char Gender { get; set; }
    public DateTime DateOfBirth { get; set; }
}
