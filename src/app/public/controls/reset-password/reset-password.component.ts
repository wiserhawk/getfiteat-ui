import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  model: any = {};
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  
   onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.closeModal();

  }

  public closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
