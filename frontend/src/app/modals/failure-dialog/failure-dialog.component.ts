import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-failure-dialog',
  templateUrl: './failure-dialog.component.html',
  styleUrls: ['./failure-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FailureDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
