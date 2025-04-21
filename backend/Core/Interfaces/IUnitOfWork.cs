namespace Core.Interfaces;

public interface IUnitOfWork
{
    ICategoryRepository Categories { get; }
    IWorkerRepository Workers { get; }
    IAdministratorRepository Administrators { get; }
    IRoleRepository Roles { get; }

    void Dispose();
    Task<int> SaveAsync();
}
