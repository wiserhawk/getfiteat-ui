import { TestBed, inject } from '@angular/core/testing';

import { AddressManagerService } from './address-manager.service';

describe('AddressManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressManagerService]
    });
  });

  it('should be created', inject([AddressManagerService], (service: AddressManagerService) => {
    expect(service).toBeTruthy();
  }));
});
