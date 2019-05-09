import { TestBed } from '@angular/core/testing';

import { RequestingService } from './requesting.service';

describe('RequestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestingService = TestBed.get(RequestingService);
    expect(service).toBeTruthy();
  });
});
