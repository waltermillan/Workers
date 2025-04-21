import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

import { SuccessDialogComponent } from '../modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from '../modals/failure-dialog/failure-dialog.component';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css',
})
export class NewCategoryComponent {
  newCategory: Category = {
    id: 0,
    name: '',
  };

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  addCategory() {
    if (this.newCategory.name == '') {
      this.dialog.open(FailureDialogComponent, {
        data: {
          message: "Category can't be empty.",
        },
      });
    } else {
      this.categoryService.add(this.newCategory).subscribe({
        next: (data) => {
          this.dialog.open(SuccessDialogComponent, {
            data: {
              message: 'Category added successfully.',
            },
          });
        },
      });
    }
  }
}
