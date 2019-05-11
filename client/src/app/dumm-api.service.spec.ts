import { TestBed, inject } from '@angular/core/testing';

import { DummApiService } from './dumm-api.service';

describe('DummApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummApiService]
    });
  });

  it('should be created', inject([DummApiService], (service: DummApiService) => {
    expect(service).toBeTruthy();
  }));
});
