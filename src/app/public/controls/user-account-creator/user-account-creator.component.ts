import { Component, OnInit, Input } from '@angular/core';
import { UserManagerService } from '../../../service/user-manager.service';
import { CheckoutService } from '../../../service/checkout.service';

@Component({
  selector: 'app-user-account-creator',
  templateUrl: './user-account-creator.component.html',
  styleUrls: ['./user-account-creator.component.css']
})
export class UserAccountCreatorComponent implements OnInit {
  
  

   model: any = {};

  
  constructor( private _userManagerService: UserManagerService, private _checkoutService: CheckoutService) {
  
  }

  ngOnInit() {
  }

  public onSubmit() {
    this._userManagerService.createUserAccount(this.model);
  }

}
