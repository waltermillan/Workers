using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class RoleRepository : GenericRepository<Role>, IRoleRepository
{
    public RoleRepository(WorkersContext context) : base(context)
    {
    }

    public override async Task<Role?> GetByIdAsync(int id)
    {
        return await _context.Role
                          .FirstOrDefaultAsync(p => p.Id == id);
    }

    public override async Task<IEnumerable<Role>> GetAllAsync()
    {
        return await _context.Role.ToListAsync();
    }
}
