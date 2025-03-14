import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../services/worker.service';
import { error } from 'node:console';

@Component({
  selector: 'app-info-worker',
  templateUrl: './info-worker.component.html',
  styleUrls: ['./info-worker.component.css']
})
export class InfoWorkerComponent implements OnInit {

  workers: any[] = []; 
  currentIndex: number = 0;

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
    this.getAllWorkers();
  }

  getAllWorkers(){
    this.workerService.getWorkers().subscribe({
      next: (data) => {
      this.workers = data;
      },
      error: (error) => {
        console.error('Error loanding workers', error);
      }
   });
  }

  deleteWorker(id:number){
    this.workerService.deleteWorker(id).subscribe({
      next: (data) => {
        console.log('Worker deleted succesfully.');
        alert('Worker deleted succesfully.');
        this.getAllWorkers();
      },
      error: (error) => {
        console.error('Error deleting worker', error);
      }
   });
  }

  nextWorker(): void {
    if (this.currentIndex < this.workers.length - 1) {
      this.currentIndex++;
    }
  }

  previousWorker(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
