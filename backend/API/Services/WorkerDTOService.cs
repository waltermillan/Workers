using API.DTOs;
using Core.Enums;
using Core.Interfaces;

namespace API.Services;

public class WorkerDTOService
{
    private readonly IUnitOfWork _unitOfWork;

    public WorkerDTOService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<WorkerDTO> GetWorkerAsync(int workerId)
    {
        var worker = await _unitOfWork.Workers.GetByIdAsync(workerId);
        var category = await _unitOfWork.Categories.GetByIdAsync(worker.CategoryId);
        var admin = await _unitOfWork.Administrators.GetByIdAsync(worker.AdministratorId);

        if (worker is null || category is null || admin is null)
        {
            return null;
        }

        var WorkerDTO = new WorkerDTO
        {
            Id = worker.Id,
            Name = worker.Name,
            SurName = worker.SurName,
            Age = worker.Age,
            CategoryId = worker.CategoryId,
            Category = category.Name,
            Salary = worker.Salary,
            Seniority = worker.Seniority,
            Gender = GenderMappings.GenderToString[worker.Gender == 'M' ? Gender.Masculino : Gender.Femenino],
            DateOfBirth = worker.DateOfBirth,
            AdministratorId = admin.Id,
            Administrator = admin.User
        };

        return WorkerDTO;
    }

    public async Task<IEnumerable<WorkerDTO>> GetWorkersAsync()
    {
        var workers = await _unitOfWork.Workers.GetAllAsync();
        List<WorkerDTO> workerDTOs = new List<WorkerDTO>();
        foreach (var worker in workers)
        {
            var category = await _unitOfWork.Categories.GetByIdAsync(worker.CategoryId);
            var admin = await _unitOfWork.Administrators.GetByIdAsync(worker.AdministratorId);

            var WorkerDTO = new WorkerDTO
            {
                Id = worker.Id,
                Name = worker.Name,
                SurName = worker.SurName,
                Age = worker.Age,
                CategoryId = worker.CategoryId,
                Category = category.Name,
                Salary = worker.Salary,
                Seniority = worker.Seniority,
                Gender = GenderMappings.GenderToString[worker.Gender == 'M' ? Gender.Masculino : Gender.Femenino],
                DateOfBirth = worker.DateOfBirth,
                AdministratorId = admin.Id,
                Administrator = admin.User
            };
            workerDTOs.Add(WorkerDTO);
        }
        return workerDTOs;
    }
}
