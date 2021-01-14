import { TestBed } from '@angular/core/testing';

import { LSService } from './l-s.service';

describe('InjectionServiceService', () => {
  let service: LSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
