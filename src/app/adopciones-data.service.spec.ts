import { TestBed } from '@angular/core/testing';

import { AdopcionesDataService } from './adopciones-data.service';

describe('AdopcionesDataService', () => {
  let service: AdopcionesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdopcionesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
