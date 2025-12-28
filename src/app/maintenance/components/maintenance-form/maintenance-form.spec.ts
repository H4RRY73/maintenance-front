import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceForm } from './maintenance-form';

describe('MaintenanceForm', () => {
  let component: MaintenanceForm;
  let fixture: ComponentFixture<MaintenanceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
