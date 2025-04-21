export class Worker {
  id: number;
  name: string;
  surName: string;
  age: number;
  categoryId: number;
  seniority: number;
  salary: number;
  gender: string;
  dateOfBirth: string;
  administratorId: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.surName = '';
    this.age = 0;
    this.categoryId = 0;
    this.seniority = 0;
    this.salary = 0;
    this.gender = '';
    this.dateOfBirth = '';
    this.administratorId = 0;
  }
}
