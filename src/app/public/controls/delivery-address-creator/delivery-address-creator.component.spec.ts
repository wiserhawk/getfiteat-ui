import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddressCreatorComponent } from './delivery-address-creator.component';

describe('DeliveryAddressCreatorComponent', () => {
  let component: DeliveryAddressCreatorComponent;
  let fixture: ComponentFixture<DeliveryAddressCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAddressCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAddressCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
