import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../services/worker.service';
import { error } from 'node:console';

@Component({
  selector: 'app-info-worker',
  templateUrl: './info-worker.component.html',
  styleUrls: ['./info-worker.component.css']
})
export class InfoWorkerComponent implements OnInit {

  workers: any[] = []; // Lista de trabajadores
  currentIndex: number = 0; // Índice del trabajador actual

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
    // Obtener los trabajadores desde la API
    console.log('InfoWorkerComponent loaded');
    this.getAllWorkers();
  }

  getAllWorkers(){
    this.workerService.getWorkers().subscribe({
      next: (data) => {
      this.workers = data; // Guardar los datos de los trabajadores
      },
      error: (error) => {
        console.error('Error al obtener trabajadores', error);
      }
   });
  }

  deleteWorker(id:number){
    this.workerService.deleteWorker(id).subscribe({
      next: (data) => {
        console.log('trabajador borrado');
        this.getAllWorkers();
      },
      error: (error) => {
        console.error('Error al obtener trabajadores', error);
      }
   });
  }

  // Método para pasar al siguiente trabajador
  nextWorker(): void {
    if (this.currentIndex < this.workers.length - 1) {
      this.currentIndex++;
    }
  }

  // Método para volver al trabajador anterior
  previousWorker(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
