import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorkerComponent } from './delete-worker.component';

describe('DeleteWorkerComponent', () => {
  let component: DeleteWorkerComponent;
  let fixture: ComponentFixture<DeleteWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
