import { TestBed } from '@angular/core/testing';

import { LogosparticipService } from './logosparticip.service';

describe('LogosparticipService', () => {
  let service: LogosparticipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogosparticipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
