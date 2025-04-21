import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WarningDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
