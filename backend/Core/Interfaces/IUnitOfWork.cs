using Core.Interfaces;

namespace Core.Interfaces;

public interface IUnitOfWork
{
    ICategoryRepository Categories { get; }
    IWorkerRepository Workers { get; }
    IAdministratorRepository Administrators { get; }

    void Dispose();
    Task<int> SaveAsync();
}
