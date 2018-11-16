import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsTrackingComponent } from './medicaments-tracking.component';

describe('MedicamentsTrackingComponent', () => {
  let component: MedicamentsTrackingComponent;
  let fixture: ComponentFixture<MedicamentsTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentsTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
