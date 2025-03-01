using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IAdministratorRepository : IGenericRepository<Administrator>
    {
        Task<Administrator?> GetByUserAndPasswordAsync(string user, string password);

    }
}
