using API.DTOs;
using API.Responses;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace API.Controllers;

public class AdministratorsController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly IPasswordHasher _passwordHasher;

    public AdministratorsController(IUnitOfWork unitOfWork, IMapper mapper, IPasswordHasher passwordHasher)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _passwordHasher = passwordHasher;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<IEnumerable<Administrator>>> Get()
    {
        try
        {
            var administrators = await _unitOfWork.Administrators.GetAllAsync();
            var data = _mapper.Map<List<Administrator>>(administrators);

            return Ok(ApiResponseFactory.Success(data, "Administrators getted successfully"));
        }
        catch (Exception ex)
        {
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue getting users. Details ${ex.Message}"));
        }
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Administrator>> Get(int id)
    {
        try
        {
            var administrator = await _unitOfWork.Administrators.GetByIdAsync(id);

            if (administrator is null)
                return NotFound();

            var data = _mapper.Map<Administrator>(administrator);

            return Ok(ApiResponseFactory.Success(data, "Administrator getted successfully"));
        }
        catch (Exception ex)
        {
            Log.Logger.Error("Authentication error", ex);
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue getting the user. Details ${ex.Message}"));
        }
    }

    [HttpPost("login")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> Post([FromBody] LoginRequest request)
    {
        var usr = request.Usr.ToUpper();
        var psw = request.Psw;

        try
        {
            var user = await _unitOfWork.Administrators.GetByUserAsync(usr);

            if (user is null || !_passwordHasher.VerifyPassword(psw, user.PassWord))
            {
                Log.Logger.Information($"Login attempt failed for user: {usr}");
                return Unauthorized(new { Code = 401, Message = "Invalid username or password" });
            }

            Log.Logger.Information($"User '{usr}' authenticated successfully.");

            var rol = await _unitOfWork.Roles.GetByIdAsync(user.RoleId);

            var data = new
            {
                user.Id,
                user.User,
                user.RoleId,
                rol.Name
            };

            return Ok(ApiResponseFactory.Success<object>( data, "User authenticated successfully"));
        }
        catch (Exception ex)
        {
            Log.Logger.Error("Authentication error", ex);
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue authenticating the user. Details ${ex.Message}"));
        }
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Administrator>> Post(Administrator oAdministrator)
    {
        try
        {
            var administrator = _mapper.Map<Administrator>(oAdministrator);

            administrator.PassWord = _passwordHasher.HashPassword(administrator.PassWord);

            _unitOfWork.Administrators.Add(administrator);
            await _unitOfWork.SaveAsync();

            if (administrator is null)
                return BadRequest();

            oAdministrator.Id = administrator.Id;

            return Ok(ApiResponseFactory.Success(new { Id = administrator.Id }, "User added successfully"));

        }
        catch (Exception ex)
        {
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue adding the user. Details ${ex.Message}"));
        }
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Administrator>> Put([FromBody] Administrator oAdministrator)
    {
        try
        {
            if (oAdministrator is null)
                return NotFound();

            oAdministrator.PassWord = _passwordHasher.HashPassword(oAdministrator.PassWord);

            var administrator = _mapper.Map<Administrator>(oAdministrator);
            _unitOfWork.Administrators.Update(administrator);
            await _unitOfWork.SaveAsync();

            return Ok(ApiResponseFactory.Success<object>(null, "User updated successfully"));

        }
        catch (Exception ex)
        {
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue updating the user. Details ${ex.Message}"));
        }
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            var administrator = await _unitOfWork.Administrators.GetByIdAsync(id);

            if (administrator is null)
                return NotFound();

            _unitOfWork.Administrators.Remove(administrator);
            await _unitOfWork.SaveAsync();

            return Ok(ApiResponseFactory.Success<object>(null, "User deleted successfully"));

        }
        catch (Exception ex)
        {
            return StatusCode(500, ApiResponseFactory.Fail<object>($"There was an issue deleting the user. Details ${ex.Message}"));
        }
    }
}