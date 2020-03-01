import { TestBed } from '@angular/core/testing';

import { BasicapisService } from './basicapis.service';

describe('BasicapisService', () => {
  let service: BasicapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
