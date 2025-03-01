import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkersComponent } from './list-workers.component';

describe('ListWorkersComponent', () => {
  let component: ListWorkersComponent;
  let fixture: ComponentFixture<ListWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListWorkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
