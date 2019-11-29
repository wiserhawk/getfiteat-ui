import { Component, OnInit } from '@angular/core';
import { AddressManagerService } from '../../../service/address-manager.service';
import { UserManagerService } from '../../../service/user-manager.service';

@Component({
  selector: 'app-address-cards',
  templateUrl: './address-cards.component.html',
  styleUrls: ['./address-cards.component.css']
})
export class AddressCardsComponent implements OnInit {

  //isDeliveryAddressAvailable: boolean = false;

  selectedAddressNumber: string;

  addressCards: any = [];

  constructor(private _addressManagerService: AddressManagerService, private _userManagerService: UserManagerService) { 
    
  }

  ngOnInit() {
    this.loadAddressCards();
    
    this._userManagerService.addObservableToUserLoginComplete().subscribe(isLoginDone => {
      if (isLoginDone) {
        this.loadAddressCards();
      }
    });
  }

  // make selection of particular address card and tick mark it.
  public doCheck(cardNumber) {
    if (cardNumber) {
      this._addressManagerService.setSelectedAddressNumber(cardNumber);
      this.selectedAddressNumber = cardNumber;
    }
  }

  public selectAddressCard() {
    if (this.isLoginComplete()) {
      let addressNumber;
      if (this.selectedAddressNumber) {
        addressNumber = this.selectedAddressNumber;
      } else {
        alert('Please select one delivery address to continue.');
        return;
      }
      if (this.addressCards && addressNumber) {
        let addressModel = this.addressCards.find(function(address) {
          return address.addressNum == addressNumber;
        });
        this._addressManagerService.setDeliveryAddress(addressModel);
      }
    }
  }

  private isLoginComplete(): boolean {
    const isLoginDone = this._userManagerService.isUserLoginComplete();
    if (!isLoginDone) {
      alert('You are not logged-in. Please login first.');
      return false;
    } else {
      return true;
    }
  }

  private loadAddressCards() {
    const userId = this._userManagerService.getUserId();
    const cards = this._addressManagerService.getUserAddressCardsUsingHttp(userId).subscribe(res => {
       this.addressCards = res.json();
    });
    /*if (cards) {
      this.addressCards = cards;
    } else {
      // Set empty array for address cards;
      this.addressCards = [];
    }*/
  }

 

  
}
