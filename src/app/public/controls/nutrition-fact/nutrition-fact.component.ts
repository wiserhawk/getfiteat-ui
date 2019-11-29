import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nutrition-fact',
  templateUrl: './nutrition-fact.component.html',
  styleUrls: ['./nutrition-fact.component.css']
})
export class NutritionFactComponent implements OnInit {

  @Input() nutritionFacts;
  //nutritionFacts: any = 

  constructor() { }

  ngOnInit() {
  }

}
