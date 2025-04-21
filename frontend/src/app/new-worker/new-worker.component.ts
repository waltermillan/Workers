import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { SuccessDialogComponent } from '../modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from '../modals/failure-dialog/failure-dialog.component';

import { WorkerService } from '../services/worker.service';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css'],
})
export class NewWorkerComponent implements OnInit {
  workerForm!: FormGroup;

  selectedCategoryId: number = 1;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private workerService: WorkerService,
    private categoryService: CategoryService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCategories();

    this.workerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      surName: ['', [Validators.required, Validators.maxLength(50)]],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      categoryId: [1, [Validators.required]],
      seniority: [0, [Validators.required, Validators.min(0)]],
      salary: [1000, [Validators.required, Validators.min(1000)]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.workerForm.valid) {
      const newWorker = {
        ...this.workerForm.value,
        administratorId: this.authService.getUserId(),
      };

      this.workerService.addWorker(newWorker).subscribe({
        next: (data) => {
          this.dialog.open(SuccessDialogComponent, {
            data: {
              message: 'Worker added succesfully.',
            },
          });
        },
        error: (error) => {
          console.error('Error added new worker:', error);
          this.dialog.open(FailureDialogComponent, {
            data: {
              message: 'Error added new worker:.',
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
