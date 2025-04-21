import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from '../services/worker.service';
import { CommonService } from '../services/common.service';

import { MatDialog } from '@angular/material/dialog';

import { SuccessDialogComponent } from '../modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from '../modals/failure-dialog/failure-dialog.component';

import { Worker } from '../models/worker.model';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrl: './update-worker.component.css',
})
export class UpdateWorkerComponent implements OnInit {
  workerForm!: FormGroup;
  workers: Worker[] = [];
  worker?: Worker;
  selectedWorkerId: number = 0;

  selectedCategoryId: number = 1;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private workerService: WorkerService,
    private categoryService: CategoryService,
    private authService: AuthService,
    private commonService: CommonService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.workerForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(0)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      surName: ['', [Validators.required, Validators.maxLength(50)]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(100)]],
      categoryId: [0, [Validators.required]],
      seniority: [0, [Validators.required, Validators.min(0)]],
      salary: [0, [Validators.required, Validators.min(1000)]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
    });

    this.getAllWorkers();
  }

  onSubmit(): void {
    if (this.workerForm.valid) {
      const newWorker = {
        ...this.workerForm.value,
        administratorId: this.authService.getUserId(),
      };

      this.workerService
        .updateWorker(newWorker, this.selectedWorkerId)
        .subscribe({
          next: (data) => {
            const msg = 'worker updated successfully.';

            this.dialog.open(SuccessDialogComponent, {
              data: {
                message: msg,
              },
            });
            this.getAllWorkers();
          },
          error: (error) => {
            const msg = 'Error updating worker.';
            this.dialog.open(FailureDialogComponent, {
              data: {
                message: msg,
              },
            });
          },
        });
    }
  }

  // Method to obtain the errors for each field
  get f() {
    return this.workerForm.controls;
  }

  getAllWorkers() {
    this.workerService.getWorkers().subscribe({
      next: (data) => {
        this.workers = data;
      },
      error: (error) => {
        console.error("Error loading worker's grid.", error);
      },
    });
  }

  onWorkerChange() {
    this.workerService.getWorker(this.selectedWorkerId).subscribe({
      next: (data) => {
        this.worker = data;
        this.workerForm.patchValue({
          id: this.selectedWorkerId,
          name: this.worker.name,
          surName: this.worker.surName,
          age: this.worker.age,
          categoryId: this.worker.categoryId,
          seniority: this.worker.seniority,
          salary: this.worker.salary,
          gender: this.worker.gender,
          dateOfBirth: this.commonService.getShortFormattedDate(
            new Date(this.worker.dateOfBirth)
          ),
        });
      },
      error: (error) => {
        console.error('Error getting data worker.', error);
      },
    });
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Error loading categories.', error);
        this.dialog.open(FailureDialogComponent, {
          data: {
            message: 'Error loading categories.',
          },
        });
      },
    });
  }

  onCategoryChange() {
    console.log('Categoría seleccionada:', this.selectedCategoryId);
  }
}
