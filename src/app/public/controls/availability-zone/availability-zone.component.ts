import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../service/http.service';


@Component({
  selector: 'app-availability-zone',
  templateUrl: './availability-zone.component.html',
  styleUrls: ['./availability-zone.component.css']
})
export class AvailabilityZoneComponent implements OnInit {

  @ViewChild("response") response;
  //city: any;
  //area: any;
  model: any = {};

  public availabilityMsg;

  constructor(private activeModal: NgbActiveModal, private _httpService: HttpService) { 

  }

  ngOnInit() {
  }

  public onSubmit() {
    this.availabilityMsg = "";
    let pincode = this.model.pincode;
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this._httpService.checkAvailabilityByPincode(pincode).subscribe(res => {
      let area = res.json();
      if (area) {
        this.response.nativeElement.classList.add("response-success-lbl");
        this.availabilityMsg =  "Our service is available in this area";
      } else {
        this.response.nativeElement.classList.add("response-failure-lbl");
        this.availabilityMsg =  "Sorry!!! Our service is not available in this area";
      }
    });

    
    //this.closeModal();
  }

  public closeModal() {
    this.activeModal.close('Modal Closed');
  }

  public cleanResponse() {
    this.availabilityMsg = "";
  }

}
