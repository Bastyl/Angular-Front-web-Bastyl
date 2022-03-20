import { TestBed } from '@angular/core/testing';

import { FirstTestService } from './first-test.service';

describe('FirstTestService', () => {
  let service: FirstTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
