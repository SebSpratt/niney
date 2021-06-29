import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not accept filter strings that are not substrings of the data', () => {
    expect(service.filter('test', 'be')).toBeFalse();
  });

  it('should accept filter strings that are substrings of the data', () => {
    expect(service.filter('abc', 'ab')).toBeTrue();
  });

  it('should accept the empty string', () => {
    expect(service.filter('xyz', '')).toBeTrue();
  });
});
