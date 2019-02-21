import { TestBed } from '@angular/core/testing';

import { SubmitPostService } from './submit-post.service';

describe('SubmitPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitPostService = TestBed.get(SubmitPostService);
    expect(service).toBeTruthy();
  });
});
