import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLoginPopupComponent } from './partner-login-popup.component';

describe('PartnerLoginPopupComponent', () => {
  let component: PartnerLoginPopupComponent;
  let fixture: ComponentFixture<PartnerLoginPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerLoginPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerLoginPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
