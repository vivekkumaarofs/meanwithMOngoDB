import { TestBed, inject } from '@angular/core/testing';

import { DupApiService } from './dup-api.service';

describe('DupApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DupApiService]
    });
  });

  it('should be created', inject([DupApiService], (service: DupApiService) => {
    expect(service).toBeTruthy();
  }));
});
