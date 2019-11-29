import { Component, OnInit, Input } from '@angular/core';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserManagerService } from '../../../service/user-manager.service';
import { CheckoutService } from '../../../service/checkout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  model: any = {};

  constructor(private _userManagerService: UserManagerService, private modalService: NgbModal) { 
   
  }

  ngOnInit() {
  }
  
  public onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    // Check user-detail box. to show that login task / account creation task is completed.
    this._userManagerService.doLogin(this.model.emailPhone, this.model.password);
    
  }

  public openResetPasswordModal() {
    const modalRef = this.modalService.open(ResetPasswordComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


}
