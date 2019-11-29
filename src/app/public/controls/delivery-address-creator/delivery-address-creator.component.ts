import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressManagerService } from '../../../service/address-manager.service';
import { UserManagerService } from '../../../service/user-manager.service';


@Component({
  selector: 'app-delivery-address-creator',
  templateUrl: './delivery-address-creator.component.html',
  styleUrls: ['./delivery-address-creator.component.css']
})
export class DeliveryAddressCreatorComponent implements OnInit {
  
  model: any = {};
  
  constructor(private _addressManagerService: AddressManagerService, private _userManagerService: UserManagerService) {

  }

  ngOnInit() {

  }
  
  public onSubmit() {
    const isLoginDone = this.isLoginComplete();
    if (isLoginDone) {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
      const userId = this._addressManagerService.getUserId();
      this._addressManagerService.createAddress(this.model, userId);
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


}
