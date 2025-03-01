import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from '../services/worker.service'; // Importa tu servicio
import { Router } from '@angular/router'; // Para redirigir después de crear el trabajador
import { error } from 'node:console';

@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent implements OnInit {

  workerForm!: FormGroup; // Definir el formulario reactivo

  constructor(
    private fb: FormBuilder,
    private workerService: WorkerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Inicializar el formulario con validaciones
    this.workerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      surName: ['', [Validators.required, Validators.maxLength(50)]],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      categoryId: [1, [Validators.required]],
      seniority: [0, [Validators.required, Validators.min(0)]],
      salary: [0, [Validators.required, Validators.min(1000)]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]]
    });
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.workerForm.valid) {
      const newWorker = this.workerForm.value;

      this.workerService.addWorker(newWorker).subscribe({
        next: (data) => {
          alert('Trabajador dado de alta');
          this.router.navigate(['/workers']);
        },
        error: (error) => {
          console.error('Error al agregar el trabajador:', error);
        }
      });
    }
  }

  // Método para obtener los errores de cada campo
  get f() {
    return this.workerForm.controls;
  }
}
