import { TestBed } from '@angular/core/testing';

import { AngchatService } from './angchat.service';

describe('AngchatService', () => {
  let service: AngchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
