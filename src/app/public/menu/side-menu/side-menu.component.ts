import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPopupComponent } from '../../controls/login-popup/login-popup.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public isUserLoggedIn: boolean;
  public userName;
  public userId;
  
  public isPartnerLoggedIn: boolean;
  public partnerName;
  public partnerId;

  constructor(private modalService: NgbModal) { 
    
    this.checkIfPartnerLoggedIn();
    this.checkIfUserLoggedIn();
  }

  ngOnInit() {
  }

  public openLoginModal() {
    const modalRef = this.modalService.open(LoginPopupComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  public checkIfPartnerLoggedIn() {
    this.isPartnerLoggedIn = false;
    if (this.isPartnerLoggedIn) {
      this.setPartnerDetails();
    }
  }

  public checkIfUserLoggedIn() {
    this.isUserLoggedIn = false;
    if (this.isUserLoggedIn) {
      this.setUserDetails();
    }
  }

  public logoutUser() {

  }

  public logoutPartner() {

  }

  private setPartnerDetails() {
    this.partnerName = "Rajveer Singh";
    this.partnerId = "VID-2015478";
  }

  private setUserDetails() {
    this.userName = "Manoj Shamra";
    this.userId = "UID-200001";
  }

  

}
