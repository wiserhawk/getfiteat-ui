import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  public orderId;

  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe( params => this.orderId = params.orderId); 
    alert('Yes order Id = ' + this.orderId)
   }

  ngOnInit() {
  }

}
