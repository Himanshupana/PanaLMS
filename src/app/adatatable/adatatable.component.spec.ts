import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADatatableComponent } from './adatatable.component';

describe('ADatatableComponent', () => {
  let component: ADatatableComponent;
  let fixture: ComponentFixture<ADatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
