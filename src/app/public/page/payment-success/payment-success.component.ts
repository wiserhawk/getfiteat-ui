import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe( params => alert(params) ); 
  }

  ngOnInit() {
  }

}
