import { TestBed } from '@angular/core/testing';

import { ConnectToNodeService } from './connect-to-node.service';

describe('ConnectToNodeService', () => {
  let service: ConnectToNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectToNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
