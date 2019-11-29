import { CartService } from '../../../service/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AvailabilityZoneComponent } from '../../controls/availability-zone/availability-zone.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  
  isLoactonSelected: boolean = false;
  city: string = "Delhi";
  area: string = "Malviya Nagar";

  isFilterSelected: boolean = false;
  filter: string = "Veg";
  



  public size = 0;
  cartSizeSubscription: Subscription;

  constructor(private _cartService: CartService, private modalService: NgbModal) { 
    
  
  }
  
  ngOnInit() {

    this.size = this._cartService.loadCartSizeFromLocalStorage();

      // Subscribe cart size observable.
     this.cartSizeSubscription = this._cartService.addObservableToCartSize().subscribe(size => {
        console.log("Cart Size Object" + size);
         this.size = size;
     });
  }

  openLocationModal() {
    const modalRef = this.modalService.open(AvailabilityZoneComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  
  ngOnDestroy() {
      // unsubscribe cart size observable.
      this.cartSizeSubscription.unsubscribe();
   }

}
