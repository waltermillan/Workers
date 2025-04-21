namespace API.DTOs;

public class WorkerDTO
{
    public int Id { get; set; }                     //Table: Workers | Field: Id
    public string? Name { get; set; }               //Table: Workers | Field: Name
    public string? SurName { get; set; }            //Table: Workers | Field: SurName
    public int Age { get; set; }                    //Table: Workers | Field: Age
    public int CategoryId { get; set; }             //Table: Workers | Field: CategoryId
    public string? Category { get; set; }           //Table: Category | Field: Name
    public int Seniority { get; set; }              //Table: Workers | Field: Seniority
    public decimal Salary { get; set; }             //Table: Workers | Field: Salary
    public string Gender { get; set; }              //Table: Workers | Field: Gender: { F:Femenino / M:Masculino }
    public DateTime DateOfBirth { get; set; }       //Table: Workers | Field: DateOfBirth
    public int AdministratorId { get; set; }        //Table: Administrator | Field: Id
    public string Administrator { get; set; }       //Table: Administrator | Field: User
}
