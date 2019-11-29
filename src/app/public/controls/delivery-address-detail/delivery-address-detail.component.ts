import { Component, OnInit } from '@angular/core';
import { AddressManagerService } from '../../../service/address-manager.service';

@Component({
  selector: 'app-delivery-address-detail',
  templateUrl: './delivery-address-detail.component.html',
  styleUrls: ['./delivery-address-detail.component.css']
})
export class DeliveryAddressDetailComponent implements OnInit {

  isDeliveryAddressAvailable: boolean = false;
  savedAddress: boolean = true;
  addressCardsAvailable: boolean = true;
  checked: boolean = false;
  selectedAddress: any;


  constructor(private _addressManagerService: AddressManagerService) { 
    //this.loadAddress();
  }

  ngOnInit() {
    this._addressManagerService.addDeliveryAddressAvailableObserver().subscribe(isAvailable => {
        this.selectedAddress = this._addressManagerService.getFinalDeliveryAddress();
        this.isDeliveryAddressAvailable = isAvailable;
        this.checked = isAvailable;
    });
  }

  public toggle() {
    this.savedAddress = !this.savedAddress;
    this.addressCardsAvailable = !this.addressCardsAvailable;
  }

  /*private loadAddress() {
    this.isDeliveryAddressAvailable = true;
    this.checked = true;
    this.selectedAddress = { 
      "addressNum" : "USER001_ADD01",
      "addressType" : "Home",
      "street" : "Flat No. 301, J1/75A, Khirki Extension",
      "area" : "Malviya Nagar, South Delhi",
      "state" : "New Delhi",
      "pincode" : "110017",
      "phone" : "9958899824"};
  }*/

  public changeAddress() {
    this.selectedAddress = null;
    this.isDeliveryAddressAvailable = false;
    this.checked = false;
  }

}
