import { TestBed } from '@angular/core/testing';

import { AvvocatoService } from './avvocato.service';

describe('AvvocatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvvocatoService = TestBed.get(AvvocatoService);
    expect(service).toBeTruthy();
  });
});
