using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;
public class AdministratorRepository : GenericRepository<Administrator>, IAdministratorRepository
{
    public AdministratorRepository(WorkersContext context) : base(context)
    {
    }

    public override async Task<Administrator?> GetByIdAsync(int id)
    {
        return await _context.Administrator
                          .FirstOrDefaultAsync(p => p.Id == id);

    }

    public override async Task<IEnumerable<Administrator>> GetAllAsync()
    {
        return await _context.Administrator
                            .ToListAsync();
    }

    public async Task<Administrator?> GetByUserAndPasswordAsync(string user, string password)
    {
        // Buscar administrador por usuario y contraseña
        return await _context.Administrator
                             .FirstOrDefaultAsync(a => a.User == user && a.PassWord == password);
    }
}
