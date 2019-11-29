import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { VendorManagerService } from '../../../service/vendor-manager.service';

@Component({
  selector: 'app-partner-login-popup',
  templateUrl: './partner-login-popup.component.html',
  styleUrls: ['./partner-login-popup.component.css']
})
export class PartnerLoginPopupComponent implements OnInit {
  
  model: any = {};

  constructor(private _vendorManagerService: VendorManagerService, public activeModal: NgbActiveModal, private modalService: NgbModal) { 
   
  }

  ngOnInit() {
  }
  
  public onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    // Check user-detail box. to show that login task / account creation task is completed.
    let userId = this._vendorManagerService.doLogin(this.model);
   
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
