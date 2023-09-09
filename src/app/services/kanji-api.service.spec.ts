import { TestBed } from '@angular/core/testing';

import { KanjiApiService } from './kanji-api.service';

describe('KanjiApiService', () => {
  let service: KanjiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
