import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { WarningDialogComponent } from './warning-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('WarningDialogComponent', () => {
  let component: WarningDialogComponent;
  let fixture: ComponentFixture<WarningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [WarningDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { message: 'Hello World' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
