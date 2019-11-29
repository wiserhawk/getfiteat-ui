import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartnerLoginPopupComponent } from '../../controls/partner-login-popup/partner-login-popup.component';
import { PartnershipRequestComponent } from '../../controls/partnership-request/partnership-request.component';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public openPartnerLoginModal() {
    const modalRef = this.modalService.open(PartnerLoginPopupComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  public openPartnershipRequestModal() {
    const modalRef = this.modalService.open(PartnershipRequestComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
