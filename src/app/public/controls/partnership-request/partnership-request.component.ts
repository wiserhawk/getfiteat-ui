import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-partnership-request',
  templateUrl: './partnership-request.component.html',
  styleUrls: ['./partnership-request.component.css']
})
export class PartnershipRequestComponent implements OnInit {

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
