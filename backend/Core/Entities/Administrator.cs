using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Administrator : BaseEntity
    {
        public string User { get; set; }
        public string PassWord { get; set; }
    }
}
