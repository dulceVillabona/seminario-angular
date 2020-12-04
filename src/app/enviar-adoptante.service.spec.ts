import { TestBed } from '@angular/core/testing';

import { EnviarAdoptanteService } from './enviar-adoptante.service';

describe('EnviarAdoptanteService', () => {
  let service: EnviarAdoptanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarAdoptanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
