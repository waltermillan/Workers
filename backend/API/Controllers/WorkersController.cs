using API.DTOs;
using API.Responses;
using API.Services;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace API.Controllers;

public class WorkersController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly WorkerDTOService _workerDTOService;

    public WorkersController(IUnitOfWork unitOfWork, IMapper mapper, WorkerDTOService workerDTOService)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _workerDTOService = workerDTOService;
    }

    [HttpGet("dto")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<IEnumerable<WorkerDTO>>> GetAll()
    {
        try
        {
            var workers = await _workerDTOService.GetWorkersAsync();
            return Ok(workers);
        }
        catch (Exception ex)
        {
            Log.Logger.Error("Error getting workers", ex);
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue getting the workers. Details ${ex.Message}"));
        }
    }

    [HttpGet("dto/{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<WorkerDTO>> GetById(int id)
    {
        try
        {
            var workers = await _workerDTOService.GetWorkerAsync(id);
            return Ok(workers);
        }
        catch (Exception ex)
        {
            Log.Logger.Error("Error getting worker", ex);
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue getting the worker. Details ${ex.Message}"));
        }
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<IEnumerable<Worker>>> Get()
    {
        var worker = await _unitOfWork.Workers.GetAllAsync();
        return _mapper.Map<List<Worker>>(worker);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Worker>> Get(int id)
    {
        var worker = await _unitOfWork.Workers.GetByIdAsync(id);

        if (worker is null)
            return NotFound();

        return _mapper.Map<Worker>(worker);
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Worker>> Post(Worker oWorker)
    {
        var worker = _mapper.Map<Worker>(oWorker);
        _unitOfWork.Workers.Add(worker);
        await _unitOfWork.SaveAsync();

        if (worker is null)
            return BadRequest();

        oWorker.Id = worker.Id;
        return CreatedAtAction(nameof(Post), new { id = oWorker.Id }, oWorker);
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Worker>> Put(int id, [FromBody] Worker oWorker)
    {
        if (oWorker is null || oWorker.Id != id)
            return NotFound();

        var worker = _mapper.Map<Worker>(oWorker);
        _unitOfWork.Workers.Update(worker);
        await _unitOfWork.SaveAsync();
        return oWorker;
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        var worker = await _unitOfWork.Workers.GetByIdAsync(id);

        if (worker is null)
            return NotFound();

        _unitOfWork.Workers.Remove(worker);
        await _unitOfWork.SaveAsync();

        return NoContent();
    }
}
