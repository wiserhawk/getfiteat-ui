import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OrderService } from './order.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class CheckoutService {

  // Keep Checkout Progress variables to show checkout process steps
  loginStepDone: boolean = false;
  deliveryAddressStepDone: boolean = false;
  paymentStepDone: boolean = false;

  // Keep Checkout details to complete checkout process.
  loggedInUserDetail: any;
  deliveryAddressDetail: any;
  payemntDetail: any;

  // Checkout Progress variable Observers.
  loginStepSubject = new Subject<boolean>();
  deliveryAddressStepSubject = new Subject<boolean>();
  paymentStepSubject = new Subject<boolean>();



  constructor(private _orderService: OrderService, private _localStorageService: LocalStorageService) {
    this.loadLoginDetailFromLocalStorage();
    this.loadDeliveryAddressDetailFromLocalStorage();
    this.loadPaymentDetailFromLocalStorage();
  }

  public checkoutProgress() {
    
  }

  public setUserDetails(details: any) {
    this.loggedInUserDetail = details;
    // Set user detail in final Order.
    let order = this._orderService.getFinalOrder();
    order.userDetail = details;
    this._orderService.setFinalOrder(order);
    // Store user detail in local storage.
    this.storeLoginDetailInLocalStorage(details);
  }

  public getUserDetails() {
    //this.loggedInUserDetail = this.loadLoginDetailFromLocalStorage();
    return this.loggedInUserDetail;
  }

  public setDeliveryAddressDetails(details: any) {
    this.deliveryAddressDetail = details;
    // Set delivery address in Final Order.
    let order = this._orderService.getFinalOrder();
    order.address = details;
    this._orderService.setFinalOrder(order);
    // Store delivey address in local storage.
    this.storeDeliveryAddressDetailInLocalStorage(details);
  }

  public getDeliveryAddressDetails() {
    //this.deliveryAddressDetail = this.loadDeliveryAddressDetailFromLocalStorage();
    return this.deliveryAddressDetail;
  }

  public setPaymentDetails(details: any) {
    this.payemntDetail = details;
    this.storePaymentDetailInLocalStorage(details);
  }

  public getPaymentDetails() {
    //this.payemntDetail = this.loadPaymentDetailFromLocalStorage();
    return this.payemntDetail;
  }

  public removePaymentDetails() {
    this.payemntDetail = null;
  }

  public setLoginStatus(status: boolean) {
    this.loginStepDone = status;
    this.loginStepSubject.next(this.loginStepDone);
  }

  public setDeliveryAddressStatus(status: boolean) {
    this.deliveryAddressStepDone = status;
    this.deliveryAddressStepSubject.next(this.deliveryAddressStepDone);
  }

  public setPaymentStatus(status: boolean) {
    this.paymentStepDone = status;
    this.paymentStepSubject.next(this.paymentStepDone);
  }

  public isLoginDone() {
    return this.loginStepDone;
  }

  public isDeliveryAddressDone() {
    return this.deliveryAddressStepDone;
  }

  public isPaymentDone() {
    return this.paymentStepDone;
  }

  public addObserverTologinStep(): Observable<boolean> {
    return this.loginStepSubject.asObservable();
  }

  public addObserverToDeliveryAddressStep(): Observable<boolean> {
    return this.deliveryAddressStepSubject.asObservable();
  }

  public addObserverToPaymentStep(): Observable<boolean> {
    return this.paymentStepSubject.asObservable();
  }

  public storeLoginDetailInLocalStorage(loginDetail: any) {
    this._localStorageService.storeLoginDetailInLocalStorage(loginDetail);
  }

  public storeDeliveryAddressDetailInLocalStorage(addressDetail: any) {
    this._localStorageService.storeDeliveryAddressDetailInLocalStorage(addressDetail);
  }

  public storePaymentDetailInLocalStorage(paymentDetail: any) {
    this._localStorageService.storePaymentDetailInLocalStorage(paymentDetail);
  }

  public loadLoginDetailFromLocalStorage() {
    this.setUserDetails(this._localStorageService.getLoginDetailFromLocalStorage());
  }

  public loadDeliveryAddressDetailFromLocalStorage() {
    this.setDeliveryAddressDetails(this._localStorageService.getDeliveryAddressDetailFromLocalStorage());
  }

  public loadPaymentDetailFromLocalStorage() {
    this.setPaymentDetails(this._localStorageService.getPaymentDetailFromLocalStorage());
  }


}
