import { TestBed, inject } from '@angular/core/testing';

import { VendorManagerService } from './vendor-manager.service';

describe('VendorManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorManagerService]
    });
  });

  it('should be created', inject([VendorManagerService], (service: VendorManagerService) => {
    expect(service).toBeTruthy();
  }));
});
