import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkerComponent } from './update-worker.component';

describe('UpdateWorkerComponent', () => {
  let component: UpdateWorkerComponent;
  let fixture: ComponentFixture<UpdateWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
