import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from '../services/worker.service'; // Importa tu servicio
import { CommonService } from '../services/common.service'; // Importa tu servicio
import { Router } from '@angular/router'; // Para redirigir después de crear el trabajador
import { Worker } from '../models/worker.model';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrl: './update-worker.component.css'
})
export class UpdateWorkerComponent implements OnInit {

  workerForm!: FormGroup; // Definir el formulario reactivo
  workers: Worker [] = [];
  worker? : Worker;
  selectedWorkerId:number = 0;

  constructor(
    private fb: FormBuilder,
    private workerService: WorkerService,
    private router: Router,
    private commonService:CommonService
  ) { }

  ngOnInit(): void {
    // Inicializar el formulario con validaciones
    this.workerForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(0)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      surName: ['', [Validators.required, Validators.maxLength(50)]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(100)]],
      categoryId: [0, [Validators.required]],
      seniority: [0, [Validators.required, Validators.min(0)]],
      salary: [0, [Validators.required, Validators.min(1000)]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]]
    });

    this.getAllWorkers();
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.workerForm.valid) {
      const newWorker = this.workerForm.value;

      console.log('ID seleccionado:', this.selectedWorkerId); // 👈 Verifica si el ID es correcto
      console.log('Datos enviados:', JSON.stringify(newWorker)); // 👈 Verifica qué datos se están enviando

      this.workerService.updateWorker(newWorker, this.selectedWorkerId).subscribe({
        next: (data) => {
          alert('Trabajador actualizado');
          this.getAllWorkers();
        },
        error: (error) => {
          console.error('Error al actualizar trabajador:', error);
        }
      });
    }
  }

  // Método para obtener los errores de cada campo
  get f() {
    return this.workerForm.controls;
  }

  getAllWorkers(){
    this.workerService.getWorkers().subscribe({
      next: (data) => {
        this.workers = data;
      },
      error: (error) => {
        console.error('Error al cargar grilla de trabajadores.', error);
      }
    })
  }

  onWorkerChange(){
    this.workerService.getWorker(this.selectedWorkerId).subscribe({
      next: (data) => {
        this.worker = data;
        //console.log('Worker data:', this.worker); // Verifica los datos que estás obteniendo
        this.workerForm.patchValue({
          id: this.selectedWorkerId,
          name: this.worker.name,
          surName: this.worker.surName,
          age: this.worker.age,
          categoryId: this.worker.categoryId,
          seniority: this.worker.seniority,
          salary: this.worker.salary,
          gender: this.worker.gender,
          dateOfBirth: this.commonService.getShortFormattedDate(new Date (this.worker.dateOfBirth)),
        });
      },
      error: (error) => {
        console.error('Error al obtener datos del trabajador.', error);
      }
    });
  }
  
  
}
