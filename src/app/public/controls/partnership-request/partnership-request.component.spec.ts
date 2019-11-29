import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipRequestComponent } from './partnership-request.component';

describe('PartnershipRequestComponent', () => {
  let component: PartnershipRequestComponent;
  let fixture: ComponentFixture<PartnershipRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
