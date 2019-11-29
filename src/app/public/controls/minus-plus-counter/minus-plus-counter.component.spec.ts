import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusPlusCounterComponent } from './minus-plus-counter.component';

describe('MinusPlusCounterComponent', () => {
  let component: MinusPlusCounterComponent;
  let fixture: ComponentFixture<MinusPlusCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinusPlusCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusPlusCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
