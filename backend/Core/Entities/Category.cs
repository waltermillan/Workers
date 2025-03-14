using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;

[Table("Categories")]
public class Category : BaseEntity
{
    [Column("Name")]
    public string? Name { get; set; }
}
