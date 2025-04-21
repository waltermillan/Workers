using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class RolesController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public RolesController(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<IEnumerable<Role>>> Get()
    {
        var roles = await _unitOfWork.Roles.GetAllAsync();
        return _mapper.Map<List<Role>>(roles);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Role>> Get(int id)
    {
        var role = await _unitOfWork.Roles.GetByIdAsync(id);

        if (role is null)
            return NotFound();

        return _mapper.Map<Role>(role);
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Role>> Post(Role oRole)
    {
        var role = _mapper.Map<Role>(oRole);
        _unitOfWork.Roles.Add(role);
        await _unitOfWork.SaveAsync();

        if (role is null)
            return BadRequest();

        oRole.Id = role.Id;
        return CreatedAtAction(nameof(Post), new { id = oRole.Id }, oRole);
    }

    [HttpPut()]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Role>> Put([FromBody] Role oRole)
    {
        if (oRole is null)
            return NotFound();

        var role = _mapper.Map<Role>(oRole);
        _unitOfWork.Roles.Update(role);
        await _unitOfWork.SaveAsync();
        return oRole;
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        var role = await _unitOfWork.Roles.GetByIdAsync(id);

        if (role is null)
            return NotFound();

        _unitOfWork.Roles.Remove(role);
        await _unitOfWork.SaveAsync();

        return NoContent();
    }
}
