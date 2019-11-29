import { TestBed, inject } from '@angular/core/testing';

import { FoodItemService } from './food-item.service';

describe('FoodItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodItemService]
    });
  });

  it('should be created', inject([FoodItemService], (service: FoodItemService) => {
    expect(service).toBeTruthy();
  }));
});
