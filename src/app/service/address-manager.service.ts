import { Injectable } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { Subject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class AddressManagerService {

  isDeliveryAddressAvailable: boolean = false;

  deliveryAddressAvailableSubject = new Subject<boolean>();

  selectedAddressNumber: string;

  deliveryAddress: any;

  userAddressCards = [];

  constructor(private _checkoutService: CheckoutService, private _httpService: HttpService) { 

  }

  public getUserAddressCardsUsingHttp(userId: string): any {
    if (!userId) { return }
    // send http call to server to get user addresses by userId.
    /*this.userAddressCards = [
      { 
        "addressNum" : "USER001_ADD01",
        "addressType" : "HOME",
        "street" : "Flat No. 301, J1/75A, Khirki Extension",
        "area" : "Malviya Nagar, South Delhi",
        "state" : "New Delhi",
        "pincode" : "110017",
        "phone" : "9958899824"
      },
      { 
        "addressNum" : "USER001_ADD02",
        "addressType" : "OFFICE",
        "street" : "Sapient Corporation Ltd. Second Floor, Infospace Uniteck Park, Sector - 21",
        "area" : "Gurugram",
        "state" : "Haryana",
        "pincode" : "102235",
        "phone" : "9958899824"
      },
      { 
        "addressNum" : "USER001_ADD03",
        "addressType" : "OFFICE",
        "street" : "IHS Markit, 9th Floor, Ambience Corporate Tower, Ambience Iceland, Sector-3",
        "area" : "Gurugram",
        "state" : "Haryana",
        "pincode" : "102356",
        "phone" : "9958899824"
      }
    ];
    
    return this.userAddressCards;*/
    return this._httpService.getAddressesByUserId(userId);
  }

  public setSelectedAddressNumber(addressNum: string) {
    this.selectedAddressNumber = addressNum;
  }

  public setDeliveryAddress(address: any) {
    this.deliveryAddress = address;
    this._checkoutService.setDeliveryAddressDetails(address);
    this._checkoutService.setDeliveryAddressStatus(true);
    this.isDeliveryAddressAvailable = true;
    this.deliveryAddressAvailableSubject.next(true);
  }

  public createAddress(data: any, userId: string): any {
    // Added userId attribute to AddressDetail (data) object.
    data.userId = userId;
    this._httpService.createAddressForUser(data).subscribe(res => {
      const addressModel = data;
      this.deliveryAddress = addressModel;
      //this.selectedAddressNumber = addressModel.addressNum;
      this._checkoutService.setDeliveryAddressDetails(addressModel);
      this._checkoutService.setDeliveryAddressStatus(true);
      this.isDeliveryAddressAvailable = true;
      this.deliveryAddressAvailableSubject.next(true);
      return addressModel;
    });
  }

  public removeDeliveryAddress() {
    this.isDeliveryAddressAvailable = false;
    this.deliveryAddressAvailableSubject.next(false);
    this.deliveryAddress = null;
    this.selectedAddressNumber = null;
  }

  public getFinalDeliveryAddress() {
    /*if (this.deliveryAddress) {
      return this.deliveryAddress;
    }

    if (this.selectedAddressNumber) {
        const addressCards = this.userAddressCards;
        if (addressCards) {
          const addressNumber = this.selectedAddressNumber;
          const address = addressCards.find(function(card) {
            return card.addressNum === addressNumber;
          });
          return address;
        }
    }*/
    const deliveryAddress = this._checkoutService.getDeliveryAddressDetails();
    return deliveryAddress;
  }

  public getUserId(): string {
    const userDetail = this._checkoutService.getUserDetails();
    if (userDetail) {
      return userDetail.userId;
    } else {
      return null;
    }
  }

  public addDeliveryAddressAvailableObserver(): Observable<boolean> {
    return this.deliveryAddressAvailableSubject.asObservable();
  }

  public isDeliveryAddressComplete(): boolean {
    return this.isDeliveryAddressAvailable;
  }


}
