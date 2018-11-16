import { TestBed } from '@angular/core/testing';

import { MedicamentsService } from './medicaments.service';

describe('MedicamentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicamentsService = TestBed.get(MedicamentsService);
    expect(service).toBeTruthy();
  });
});
