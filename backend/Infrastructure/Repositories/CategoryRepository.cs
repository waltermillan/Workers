using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;
public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
{
    public CategoryRepository(WorkersContext context) : base(context)
    {
    }

    public override async Task<Category?> GetByIdAsync(int id)
    {
        return await _context.Category
                          .FirstOrDefaultAsync(p => p.Id == id);

    }

    public override async Task<IEnumerable<Category>> GetAllAsync()
    {
        return await _context.Category
                            .ToListAsync();
    }
}
