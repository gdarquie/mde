import { TestBed, inject } from '@angular/core/testing';

import { FictionService } from './fiction.service';

describe('FictionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FictionService]
    });
  });

  it('should be created', inject([FictionService], (service: FictionService) => {
    expect(service).toBeTruthy();
  }));
});
