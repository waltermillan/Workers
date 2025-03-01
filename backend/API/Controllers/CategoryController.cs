﻿using API.Controllers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/categories")] // Usamos el plural en la ruta para seguir la convención RESTful
public class CategoryController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public CategoryController(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    // Método existente: obtener todas las ciudades
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<IEnumerable<Category>>> Get()
    {
        var categories = await _unitOfWork.Categories.GetAllAsync();
        return _mapper.Map<List<Category>>(categories);
    }

    // Método existente: obtener una ciudad por su ID
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Category>> Get(int id)
    {
        var category = await _unitOfWork.Categories.GetByIdAsync(id);

        if (category is null)
            return NotFound();

        return _mapper.Map<Category>(category);
    }

    // Método existente: agregar una categoria
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Category>> Post(Category oCategory)
    {
        var category = _mapper.Map<Category>(oCategory);
        _unitOfWork.Categories.Add(category);
        await _unitOfWork.SaveAsync();

        if (category is null)
            return BadRequest();

        oCategory.Id = category.Id;
        return CreatedAtAction(nameof(Post), new { id = oCategory.Id }, oCategory);
    }

    // Método existente: actualizar una categoria
    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Category>> Put(int id, [FromBody] Category oCategory)
    {
        if (oCategory is null)
            return NotFound();

        var category = _mapper.Map<Category>(oCategory);
        _unitOfWork.Categories.Update(category);
        await _unitOfWork.SaveAsync();
        return oCategory;
    }

    // Método existente: eliminar una categoria
    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        var category = await _unitOfWork.Categories.GetByIdAsync(id);

        if (category is null)
            return NotFound();

        _unitOfWork.Categories.Remove(category);
        await _unitOfWork.SaveAsync();

        return NoContent();
    }
}
