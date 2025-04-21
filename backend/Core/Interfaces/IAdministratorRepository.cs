using Core.Entities;

namespace Core.Interfaces;

public interface IAdministratorRepository : IGenericRepository<Administrator>
{
    Task<Administrator?> GetByUserAsync(string user);
}
