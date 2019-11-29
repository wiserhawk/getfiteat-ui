import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCardsComponent } from './address-cards.component';

describe('AddressCardsComponent', () => {
  let component: AddressCardsComponent;
  let fixture: ComponentFixture<AddressCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
