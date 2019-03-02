import { TestBed } from '@angular/core/testing';

import { TravelhacksPostService } from './travelhacks-post.service';

describe('TravelhacksPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelhacksPostService = TestBed.get(TravelhacksPostService);
    expect(service).toBeTruthy();
  });
});
