import { TestBed } from '@angular/core/testing';

import { N4VocabService } from './n4-vocab.service';

describe('N4VocabService', () => {
  let service: N4VocabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(N4VocabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
