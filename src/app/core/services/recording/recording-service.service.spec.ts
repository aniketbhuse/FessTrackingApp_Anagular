import { TestBed } from '@angular/core/testing';

import { RecordingServiceService } from './recording-service.service';

describe('RecordingServiceService', () => {
  let service: RecordingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
