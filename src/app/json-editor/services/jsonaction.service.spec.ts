import { TestBed } from '@angular/core/testing';

import { JSONActionService } from './jsonaction.service';

describe('JSONActionServiceService', () => {
  let service: JSONActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
