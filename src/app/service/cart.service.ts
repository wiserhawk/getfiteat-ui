import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class CartService implements OnInit {
  

  public cartSizeSubject = new Subject<number>();
  
  public cartItemsSubject = new Subject<any>();
  
  public size: number = 0;
  
  public cartItems: any = [];
  
  constructor(private _localStorageService: LocalStorageService) { 
    this.cartItems = this.loadCartDetailsFromLocalStorage();
    this.size = this.loadCartSizeFromLocalStorage();
  }
  
  ngOnInit(): void {
    
  }
  
  // Add new item into CART
  addItemInCart(id, name, type, price, netPrice, quantity) {
    let item = this.getItemFromCartItems(id);
    if (!item) {
      this.cartItems.push({itemId: id, itemName: name, type: type, price: price, netPrice: netPrice, quantity: quantity});
    } else {
      const index = this.cartItems.indexOf(item);
      item.quantity = item.quantity + quantity;
      this.cartItems[index] = item;
    }
    
    this.cartItemsSubject.next(this.cartItems);
    
    // Increment cart size
    this.incrementCartSize(quantity);
    
    this.storeCartSizeInLocalStorage(this.size);
    this.storeCartDetailsInLocalStorage(this.cartItems);

  }

  // Remove all items from cart
  removeAllItemsFromCart() {
    this.storeCartSizeInLocalStorage(0);
    this.storeCartDetailsInLocalStorage([]);
    this.cartSizeSubject.next(0);
    this.cartItemsSubject.next([]);
  }
  
  // Remove existing Item from CART
  removeItemFromCart(id) {
    let item = this.getItemFromCartItems(id);
    if (item) {
      const size = item.quantity;
      const index = this.cartItems.indexOf(item);
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
      // Decrement cart size
      this.decrementCartSize(size);
    }
    
    this.storeCartSizeInLocalStorage(this.size);
    this.storeCartDetailsInLocalStorage(this.cartItems);
  }
  
  // Reduce quantity from cart
  reduceQuantityFromCart(id, quantity) {
    let item = this.getItemFromCartItems(id);
    if (item) {
      const index = this.cartItems.indexOf(item);
      item.quantity = item.quantity - quantity;
      this.cartItems[index] = item;
      this.cartItemsSubject.next(this.cartItems);
      // Decrement cart size
      this.decrementCartSize(quantity);
    }
    
    this.storeCartSizeInLocalStorage(this.size);
    this.storeCartDetailsInLocalStorage(this.cartItems);
  }
  
  
  // Increase cart size by adding given count
  incrementCartSize(count) {
    this.size = this.size + count;
    this.cartSizeSubject.next(this.size);
  }
  
  // Decrease cart size by subtracting given count
  decrementCartSize(count) {
    this.size = this.size - count;
    this.cartSizeSubject.next(this.size);
  }
  
  addObservableToCartSize(): Observable<number> {
    return this.cartSizeSubject.asObservable();
  }
  
  addObservableToCartItems(): Observable<any> {
    return this.cartItemsSubject.asObservable();
  }
  
  // To keep data intact after refresh of page.
  storeCartDetailsInLocalStorage(data: any) {
    this._localStorageService.storeCartDetailsInLocalStorage(data);
  }

  storeCartSizeInLocalStorage(size) {
    this._localStorageService.storeCartSizeInLocalStorage(size);
  }

  loadCartDetailsFromLocalStorage(): any {
    return this._localStorageService.getCartDetailsFromLocalStorage();
  }

  loadCartSizeFromLocalStorage() {
    return this._localStorageService.getCartSizeFromLocalStorage();
  }

  private getItemFromCartItems(id) {
    let item;
    if (this.cartItems) {
      item = this.cartItems.find(function(it) {
        return it.itemId === id; 
      });
    } else {
      this.cartItems = [];
    }
    return item;
  }
  
  

}
