import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker.model';
import { WorkerService } from '../services/worker.service';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-list-workers',
  templateUrl: './list-workers.component.html',
  styleUrl: './list-workers.component.css'
})
export class ListWorkersComponent implements OnInit {

  workers:Worker[] = []

  constructor(private workerService: WorkerService) {
    
  }

  ngOnInit(){
    this.getAllWorkers();
  }

  // Método para obtener todos los trabajadores
  getAllWorkers(){
    this.workerService.getWorkers().subscribe({
      next: (data: Worker[]) => {
        this.workers = data;
      },
      error: (error) => {
        console.log('Error loading workers.', error);
      }
    });
  }

  // Método para borrar un trabajador
  deleteWorker(id:number){
    this.workerService.deleteWorker(id).subscribe({
      next: (data) => {
        console.log('Worker deleted succesfully.');
        alert('Worker deleted succesfully.');
        this.getAllWorkers();
      },
      error: (error) => {
        console.error('Error deleting worker.', error);
      }
    });
  }

}
