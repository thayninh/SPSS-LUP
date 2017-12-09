import { TestBed, inject } from '@angular/core/testing';

import { GetUuidService } from './get-uuid.service';

describe('GetUuidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUuidService]
    });
  });

  it('should be created', inject([GetUuidService], (service: GetUuidService) => {
    expect(service).toBeTruthy();
  }));
});
