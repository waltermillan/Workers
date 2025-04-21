export class WorkerDTO {
  id: number;
  name: string;
  surName: string;
  age: number;
  categoryId: number;
  category: string;
  seniority: number;
  salary: number;
  gender: string;
  dateOfBirth: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.surName = '';
    this.age = 0;
    this.categoryId = 0;
    this.category = '';
    this.seniority = 0;
    this.salary = 0;
    this.gender = '';
    this.dateOfBirth = '';
  }
}
