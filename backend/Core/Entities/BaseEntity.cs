﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;

public class BaseEntity
{
    [Column("id")]
    public int Id { get; set; }
}
