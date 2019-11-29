import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  private apiRootUrl = "http://localhost:9900";

  
  constructor(private _http: Http) { }

  /** ######## FOOD SERVICE CALLS #########   */

  /**
   * Get all food items.
   */
  public getAllFoodItems(): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/foods/items/getAllItems";
    return this._http.get(url);
  }

  /**
   * Get all active food items.
   */
  public getAllActiveFoodItems(): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/foods/items/getAllActiveItems";
    return this._http.get(url);
  }

  /**
   * Get food item by itemId
   */
  public getFoodItemById(id: string) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/foods/items/getItemById/" + id;
    return this._http.get(url);
  }

  /** ######## USER SERVICE CALLS #########   */
  /**
   * Create new user account using user details.
   * @param userDetail 
   */
  public createUserAccount(userDetail: any): Observable<Response> {
    let status: boolean = false;
    let url = this.apiRootUrl + "/gfe-main/user-manager/userAccount/create";
    return this._http.post(url, userDetail);
  }

  public authenticateUser(loginId: string, pwd: string): Observable<Response> {
    let loginDetail = {identifier: loginId,  password: pwd};
    let url = this.apiRootUrl + "/gfe-main/user-manager/authenticate";
    return this._http.post(url, loginDetail);
  }

  public createAddressForUser(addressDetail: string): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/user-manager/userAddress/create";
    return this._http.post(url, addressDetail);
  }

  public getAddressesByUserId(userId: string): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/user-manager/addressDetailsByUserId/get";
    return this._http.post(url, userId);
  }

  /** ######## BILLING SERVICE CALLS #########   */
  /**
   * Calculate bill using bill details.
   * @param billDetail 
   */
  public calculateBill(billDetail: any): Observable<Response> {
    let status: boolean = false;
    let url = this.apiRootUrl + "/gfe-main/billing/calculateBill";
    //let url = "http://localhost:9002/billing/calculateBill";
    return this._http.post(url, billDetail);
  }

  /**
   * Check whether coupon is valid or not
   * @param coupon
   */
  public isValidCoupon(coupon: string): Observable<Response>  {
    let url = this.apiRootUrl + "/gfe-main/billing/isValidCoupon/" + coupon;
    return this._http.get(url);
  }
  
  
  /** ######## ORDER SERVICE CALLS #########   */
  
  public placeOrder(order: any): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/order/createOrder/save";
    return this._http.post(url, order);
  }

  public getOrderDetail(orderId: string) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/order/orderByOrderId/" + orderId;
    return this._http.get(url);
  }

  /** ######## AVAILABILITY SERVICE CALLS #########   */
  
  public checkAvailabilityByPincode(pincode: string) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/availability/checkByPincode/" + pincode;
    return this._http.get(url);
  }

  public savePaymentDetails(paymentPayload: any) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/payment/payumoney/payment-details";
    return this._http.post(url, paymentPayload);
  }

  public submitToPayUmoney(data: any) : Observable<Response> {
    let url = "https://test.payu.in/_payment";
    return this._http.post(url, data);
  }
}
