import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddressDetailComponent } from './delivery-address-detail.component';

describe('DeliveryAddressDetailComponent', () => {
  let component: DeliveryAddressDetailComponent;
  let fixture: ComponentFixture<DeliveryAddressDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAddressDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAddressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
