import { TestBed } from '@angular/core/testing';

import { ModeloVehiculoService } from './modelo-vehiculo.service';

describe('ModeloVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeloVehiculoService = TestBed.get(ModeloVehiculoService);
    expect(service).toBeTruthy();
  });
});
