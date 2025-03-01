using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[ApiController]
[Route("api/administrators")] // Usamos el plural en la ruta para seguir la convención RESTful
public class AdministratorController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public AdministratorController(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    // Método existente: obtener todas los administratores
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<IEnumerable<Administrator>>> Get()
    {
        var administrators = await _unitOfWork.Administrators.GetAllAsync();
        return _mapper.Map<List<Administrator>>(administrators);
    }

    // Método existente: obtener un administrator por su ID
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Administrator>> Get(int id)
    {
        var administrator = await _unitOfWork.Administrators.GetByIdAsync(id);

        if (administrator is null)
            return NotFound();

        return _mapper.Map<Administrator>(administrator);
    }

    // GET: api/administrator/user/password
    [HttpGet("login")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<object>> Authenticate(string user, string password)
    {
        var administrator = await _unitOfWork.Administrators.GetByUserAndPasswordAsync(user, password);

        if (administrator is null)
            return Ok(new { authenticated = false });

        return Ok(new { authenticated = true });
    }

    // Método existente: agregar un administrator
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Administrator>> Post(Administrator oAdministrator)
    {
        var administrator = _mapper.Map<Administrator>(oAdministrator);
        _unitOfWork.Administrators.Add(administrator);
        await _unitOfWork.SaveAsync();

        if (administrator is null)
            return BadRequest();

        oAdministrator.Id = administrator.Id;
        return CreatedAtAction(nameof(Post), new { id = oAdministrator.Id }, oAdministrator);
    }

    // Método existente: actualizar un administrator
    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Administrator>> Put([FromBody] Administrator oAdministrator)
    {
        if (oAdministrator is null)
            return NotFound();

        var administrator = _mapper.Map<Administrator>(oAdministrator);
        _unitOfWork.Administrators.Update(administrator);
        await _unitOfWork.SaveAsync();
        return oAdministrator;
    }

    // Método existente: eliminar un administrator
    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        var administrator = await _unitOfWork.Administrators.GetByIdAsync(id);

        if (administrator is null)
            return NotFound();

        _unitOfWork.Administrators.Remove(administrator);
        await _unitOfWork.SaveAsync();

        return NoContent();
    }
}