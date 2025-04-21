import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { FailureDialogComponent } from './failure-dialog.component'; // Cambia el componente correcto
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('FailureDialogComponent', () => {
  let component: FailureDialogComponent;
  let fixture: ComponentFixture<FailureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule], // Asegúrate de que MatDialogModule esté importado
      declarations: [FailureDialogComponent], // Declara el componente correcto
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { message: 'Error occurred' } }, // Provee MAT_DIALOG_DATA
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FailureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
