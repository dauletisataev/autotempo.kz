import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationGaugeComponent } from './medication-gauge.component';

describe('MedicationGaugeComponent', () => {
  let component: MedicationGaugeComponent;
  let fixture: ComponentFixture<MedicationGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
