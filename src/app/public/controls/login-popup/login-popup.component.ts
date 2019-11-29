import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserManagerService } from '../../../service/user-manager.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  model: any = {};

  constructor(private _userManagerService: UserManagerService, public activeModal: NgbActiveModal, private modalService: NgbModal) { 
   
  }

  ngOnInit() {
  }

  
  
  public onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    // Check user-detail box. to show that login task / account creation task is completed.
    let userId = this._userManagerService.doLogin(this.model.emailPhone, this.model.password);
   
    this.closeModal();
  }


  public closeModal() {
    this.activeModal.close('Modal Closed');
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
