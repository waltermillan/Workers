import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { SuccessDialogComponent } from '../modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from '../modals/failure-dialog/failure-dialog.component';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css',
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  categories: Category[] = [];
  category?: Category;
  selectedCategoryId: number = 0;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.categoryForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(0)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
    });

    this.getAllCategories();
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const newCategory = this.categoryForm.value;

      this.categoryService.update(newCategory).subscribe({
        next: (data) => {
          const msg = 'category updated successfully.';

          this.dialog.open(SuccessDialogComponent, {
            data: {
              message: msg,
            },
          });
          this.getAllCategories();
        },
        error: (error) => {
          const msg = 'Error updating category.';
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
    return this.categoryForm.controls;
  }

  onCategoryChange() {
    this.categoryService.getById(this.selectedCategoryId).subscribe({
      next: (data) => {
        this.category = data;
        this.categoryForm.patchValue({
          id: this.selectedCategoryId,
          name: this.category.name,
        });
      },
      error: (error) => {
        console.error('Error getting data category.', error);
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
}
