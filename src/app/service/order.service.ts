import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class OrderService {

  private finalOrder: any = {
    "userDetail":"",
    "address":"",
    "items":"",
    "itemPrice":"",
    "deliveryCharge":"",
    "gst":"",
    "cgst":"",
    "sgst":"",
    "coupon":"",
    "couponDiscount":"",
    "payable":"",
    "paymentMode":""
  }

  constructor(private _localStorageService: LocalStorageService) { 
  }

  public getFinalOrder(): any {
    return this.finalOrder;
  }

  public setFinalOrder(order: any) {
    this.finalOrder = order;
  }

  public storeOrderToLocalStorage(order: any) {
    this._localStorageService.storeOrderToLocalStorage(order);
  }

  public getOrderFromLocalStorage() {
    const order = this._localStorageService.getOrderFromLocalStorage();
    return order;
  }

  public removeOrderFromLocalStorage() {
    this._localStorageService.cleanOrderFromLocalStorage();
  }

}
