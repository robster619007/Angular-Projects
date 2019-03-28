import { TestBed } from '@angular/core/testing';

import { CambrianServiceService } from './cambrian-service.service';

describe('CambrianServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambrianServiceService = TestBed.get(CambrianServiceService);
    expect(service).toBeTruthy();
  });
});
