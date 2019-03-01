import { TestBed } from '@angular/core/testing';

import { MinimalismPostService } from './minimalism-post.service';

describe('MinimalismPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinimalismPostService = TestBed.get(MinimalismPostService);
    expect(service).toBeTruthy();
  });
});
