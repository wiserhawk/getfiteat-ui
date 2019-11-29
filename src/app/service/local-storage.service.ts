import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  // CART KEYS
  private CART_DATA_KEY = "CART_DATA_KEY";
  private CART_SIZE_KEY = "CART_SIZE_KEY";

  // CHECKOUT KEYS
  private LOGIN_DETAIL_KEY = "LOGIN_DETAIL_KEY";
  private ADDRESS_DETAIL_KEY = "ADDRESS_DETAIL_KEY";
  private PAYMENT_DETAIL_KEY = "PAYMENT_DETAIL_KEY";

  // ORDER KEYS
  private LAST_ORDER_KEY = "LAST_ORDER_KEY";


  constructor() { }

  /* Start Cart Methods */
  public storeCartDetailsInLocalStorage(data: any) {
    localStorage.setItem(this.CART_DATA_KEY, JSON.stringify(data));
  }

  public storeCartSizeInLocalStorage(size) {
    let sizeString = String(size);
    localStorage.setItem(this.CART_SIZE_KEY, sizeString);
  }
  
  public getCartDetailsFromLocalStorage(): any {
    return JSON.parse(localStorage.getItem(this.CART_DATA_KEY));
  }

  public getCartSizeFromLocalStorage() {
    const s = localStorage.getItem(this.CART_SIZE_KEY);
    if (s) {
      return Number.parseInt(s);
    } else {
      return 0;
    }
  }

  public clearCartDataFromLocalStorage() {
    localStorage.removeItem(this.CART_DATA_KEY);
    localStorage.removeItem(this.CART_SIZE_KEY);
  }

  /* End Cart Methods */

  /* Start Checkout Methods */

  public storeLoginDetailInLocalStorage(loginDetail: any) {
    if (loginDetail) {
      localStorage.setItem(this.LOGIN_DETAIL_KEY, JSON.stringify(loginDetail));
    }
  }

  public storeDeliveryAddressDetailInLocalStorage(addressDetail: any) {
    if (addressDetail) {
      localStorage.setItem(this.ADDRESS_DETAIL_KEY, JSON.stringify(addressDetail));
    }
  }

  public storePaymentDetailInLocalStorage(paymentDetail: any) {
    if (paymentDetail) {
      localStorage.setItem(this.PAYMENT_DETAIL_KEY, JSON.stringify(paymentDetail));
    }
  }

  public getLoginDetailFromLocalStorage(): any {
    const loginDetail = JSON.parse(localStorage.getItem(this.LOGIN_DETAIL_KEY));
    return loginDetail;
  }

  public getDeliveryAddressDetailFromLocalStorage(): any {
    const addressDetail = JSON.parse(localStorage.getItem(this.ADDRESS_DETAIL_KEY));
    return addressDetail;
  }

  public getPaymentDetailFromLocalStorage(): any {
    const payemntDetail = JSON.parse(localStorage.getItem(this.PAYMENT_DETAIL_KEY));
    return payemntDetail;
  }

  public cleanLoginDetailFromLocalStorage() {
    localStorage.removeItem(this.LOGIN_DETAIL_KEY);
  }

  public cleanDeliveryAddressDetailFromLocalStorage() {
    localStorage.removeItem(this.ADDRESS_DETAIL_KEY);
  }

  public cleanPaymentDetailFromLocalStorage() {
    localStorage.removeItem(this.PAYMENT_DETAIL_KEY);
  }

  /* End Checkout Methods*/

  /* Start Order Methods */

  public storeOrderToLocalStorage(order: any) {
    if (order) {
      localStorage.setItem(this.LAST_ORDER_KEY, JSON.stringify(order));
    }
  }

  public getOrderFromLocalStorage() {
    const order = JSON.parse(localStorage.getItem(this.LAST_ORDER_KEY));
    return order;
  }

  public cleanOrderFromLocalStorage() {
    localStorage.removeItem(this.LAST_ORDER_KEY);
  }
  
  /* End Order Methods */


}
