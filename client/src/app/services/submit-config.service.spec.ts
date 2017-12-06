import { TestBed, inject } from '@angular/core/testing';

import { SubmitConfigService } from './submit-config.service';

describe('SubmitConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitConfigService]
    });
  });

  it('should be created', inject([SubmitConfigService], (service: SubmitConfigService) => {
    expect(service).toBeTruthy();
  }));
});
