import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SuccessDialogComponent } from '../modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from '../modals/failure-dialog/failure-dialog.component';
import { WorkerDTO } from '../models/worker-dto.model';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-list-workers',
  templateUrl: './list-workers.component.html',
  styleUrl: './list-workers.component.css',
})
export class ListWorkersComponent implements OnInit {
  workers: WorkerDTO[] = [];

  constructor(
    private workerService: WorkerService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllWorkers();
  }

  getAllWorkers() {
    this.workerService.getWorkersDto().subscribe({
      next: (data: WorkerDTO[]) => {
        this.workers = data;
      },
      error: (error) => {
        console.error('Error loading workers.', error);
        this.dialog.open(FailureDialogComponent, {
          data: {
            message: 'Error loading workers.',
          },
        });
      },
    });
  }

  deleteWorker(id: number) {
    this.workerService.deleteWorker(id).subscribe({
      next: (data) => {
        this.dialog.open(SuccessDialogComponent, {
          data: {
            message: 'Worker deleted succesfully.',
          },
        });
        this.getAllWorkers();
      },
      error: (error) => {
        this.dialog.open(FailureDialogComponent, {
          data: {
            message: 'Error deleting worker.',
          },
        });
      },
    });
  }
}
