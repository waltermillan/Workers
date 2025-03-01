﻿using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

public class WorkerRepository : GenericRepository<Worker>, IWorkerRepository
{
    public WorkerRepository(WorkersContext context) : base(context)
    {
    }

    // Método existente
    public override async Task<Worker?> GetByIdAsync(int id)
    {
        return await _context.Worker
                          .FirstOrDefaultAsync(p => p.Id == id);
    }

    // Método existente
    public override async Task<IEnumerable<Worker>> GetAllAsync()
    {
        return await _context.Worker.ToListAsync();
    }

    // Método para obtener ciudades por ID
    public async Task<IEnumerable<Worker>> GetCitiesByRegionIdAsync(int id)
    {
        return await _context.Worker
                             .Where(c => c.Id == id)
                             .ToListAsync();
    }
}
