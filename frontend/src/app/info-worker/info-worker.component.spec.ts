import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkerComponent } from './info-worker.component';

describe('InfoWorkerComponent', () => {
  let component: InfoWorkerComponent;
  let fixture: ComponentFixture<InfoWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
