import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { WorkerDTO } from '../models/worker-dto.model';
import { WorkerService } from '../services/worker.service';
import { SuccessDialogComponent } from '../modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from '../modals/failure-dialog/failure-dialog.component';

@Component({
  selector: 'app-info-worker',
  templateUrl: './info-worker.component.html',
  styleUrls: ['./info-worker.component.css'],
})
export class InfoWorkerComponent implements OnInit {
  workers: WorkerDTO[] = [];
  currentIndex: number = 0;

  constructor(
    private workerService: WorkerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllWorkers();
  }

  getAllWorkers() {
    this.workerService.getWorkersDto().subscribe({
      next: (data) => {
        this.workers = data;
      },
      error: (error) => {
        const msg = 'Error loanding workers.';
        this.showDialogFailure(msg);
        console.error('', error);
      },
    });
  }

  deleteWorker(id: number) {
    this.workerService.deleteWorker(id).subscribe({
      next: (data) => {
        const msg = 'Worker deleted succesfully.';
        this.showDialogSuccess(msg);

        this.getAllWorkers();
      },
      error: (error) => {
        const msg = 'Error deleting worker.';
        this.showDialogFailure(msg);
        console.error('', error);
      },
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

  firstWorker(): void {
    this.currentIndex = 0;
  }

  lastWorker(): void {
    this.currentIndex = this.workers.length - 1;
  }

  showDialogFailure(msg: string) {
    this.dialog.open(FailureDialogComponent, {
      data: {
        message: msg,
      },
    });
  }

  showDialogSuccess(msg: string) {
    this.dialog.open(SuccessDialogComponent, {
      data: {
        message: msg,
      },
    });
  }
}
