import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

import { SuccessDialogComponent } from '../modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from '../modals/failure-dialog/failure-dialog.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css',
})
export class ListCategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories = data.sort((a, b) => a.name.localeCompare(b.name));
      },
      error: (error) => {
        this.dialog.open(FailureDialogComponent, {
          data: {
            message: 'Error loading categories.',
          },
        });
      },
    });
  }

  deleteCategory(id: number) {
    this.categoryService.delete(id).subscribe({
      next: (data) => {
        this.getAllCategories();
        this.dialog.open(SuccessDialogComponent, {
          data: {
            message: 'Category deleted successfully.',
          },
        });
      },
    });
  }
}
