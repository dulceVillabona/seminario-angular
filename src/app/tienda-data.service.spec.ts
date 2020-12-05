import { TestBed } from '@angular/core/testing';

import { TiendaDataService } from './tienda-data.service';

describe('TiendaDataService', () => {
  let service: TiendaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
