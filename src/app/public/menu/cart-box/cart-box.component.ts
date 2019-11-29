import { CartService } from '../../../service/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.css']
})
export class CartBoxComponent implements OnInit, OnDestroy {
  
  public size = 0;
  cartSizeSubscription: Subscription;
  
  cartItems: any = [];
  cartItemsSubscription: Subscription;
  
  public totalPrice = 0;

 
  constructor(private _cartService: CartService, private _router: Router) { 
    
  }

  ngOnInit() {
    this.size = this._cartService.loadCartSizeFromLocalStorage();
    this.cartItems = this._cartService.loadCartDetailsFromLocalStorage();
    this.updateTotalPrice();
    
     // Subscribe cart size observable.
     this.cartSizeSubscription = this._cartService.addObservableToCartSize().subscribe(size => {
        console.log("Cart Size Object" + size);
         this.size = size;
     });
    
    
    // Subscribe cart items observable
    this.cartItemsSubscription = this._cartService.addObservableToCartItems().subscribe(items => {
        this.cartItems = items;
        this.updateTotalPrice();
    });
  }
  
  updateTotalPrice() {
    let total = 0;
    if (this.cartItems) {
      this.cartItems.forEach(item => {
        const price = item.netPrice;
        const quantity = item.quantity;
        total += price * quantity;   
      });
      this.totalPrice = total;
    }
  }
  
  deteleItemFromCart(id) {
    this._cartService.removeItemFromCart(id);
    
  }

  public checkout() {
    if (this.size != 0) {
      this._router.navigateByUrl("checkout");
    }
  }
  
  ngOnDestroy() {
      // unsubscribe cart items observable
      this.cartItemsSubscription.unsubscribe();
      // unsubscribe cart size observable.
      this.cartSizeSubscription.unsubscribe();
    
   }

}
