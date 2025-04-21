using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repositories;

namespace Infrastructure.UnitOfWork;

public class UnitOfWork : IUnitOfWork, IDisposable
{
    private readonly WorkersContext _context;
    private IWorkerRepository _workers;
    private ICategoryRepository _categories;
    private IAdministratorRepository _administrators;
    private IRoleRepository _roles;

    public UnitOfWork(WorkersContext context)
    {
        _context = context;
        _workers = new WorkerRepository(context);
        _categories = new CategoryRepository(context);
        _administrators = new AdministratorRepository(context);
    }

    public IWorkerRepository Workers
    {
        get
        {
            if (_workers is null)
                _workers = new WorkerRepository(_context);

            return _workers;
        }
    }    
    
    public IAdministratorRepository Administrators
    {
        get
        {
            if (_administrators is null)
                _administrators = new AdministratorRepository(_context);

            return _administrators;
        }
    }

    public ICategoryRepository Categories
    {
        get
        {
            if (_categories is null)
                _categories = new CategoryRepository(_context);
   
            return _categories;
        }
    }

    public IRoleRepository Roles
    {
        get
        {
            if (_roles is null)
                _roles = new RoleRepository(_context);

            return _roles;
        }
    }

    public async Task<int> SaveAsync()
    {
        return await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
