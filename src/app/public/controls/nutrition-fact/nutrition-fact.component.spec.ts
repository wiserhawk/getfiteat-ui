import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionFactComponent } from './nutrition-fact.component';

describe('NutritionFactComponent', () => {
  let component: NutritionFactComponent;
  let fixture: ComponentFixture<NutritionFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
