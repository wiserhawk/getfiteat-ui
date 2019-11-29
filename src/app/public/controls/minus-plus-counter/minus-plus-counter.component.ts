import { CartService } from '../../../service/cart.service';
import { Component, OnInit, Input, OnDestroy, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-minus-plus-counter',
  templateUrl: './minus-plus-counter.component.html',
  styleUrls: ['./minus-plus-counter.component.css']
})
export class MinusPlusCounterComponent implements OnInit, OnDestroy {
  
  @Input() itemId;
  @Input() name;
  @Input() price;
  @Input() netPrice;
  @Input() type;
  @Input() quantity;
  
  cartItems = [];
  cartItemsSubscription: Subscription;
  
  count = 0;

  constructor(private _cartService: CartService) { 
    
  }

  ngOnInit() {
    console.log("What is quantity " + this.quantity);
    this.count = this.quantity;
    
    // Subscribe cart items to update quantity of item.
    this.cartItemsSubscription = this._cartService.addObservableToCartItems().subscribe(items => {
          const id = this.itemId;
          const item = items.find(function(it) {
           return it.itemId === id; 
          });
          if (item) {
            this.count = item.quantity;
          }
    });
  }
  
 
  increment() {
    console.log("Increasing and adding one item to cart.");
    this.count++;
    this._cartService.addItemInCart(this.itemId, this.name, this.type, this.price, this.netPrice, 1);
  }
  
  decrement() {
     console.log("decreasing and removing one item from cart.");
    if (this.count > 0) {
      this.count--;
      this._cartService.reduceQuantityFromCart(this.itemId, 1);
    }
  }
  
  ngOnDestroy() {
    // Unsubscribe observable.
    this.cartItemsSubscription.unsubscribe();
  }
  
}
