import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressManagerService } from '../../../../service/address-manager.service';
import { CheckoutService } from '../../../../service/checkout.service';
import { OrderService } from '../../../../service/order.service';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-payumoney',
  templateUrl: './payumoney.component.html',
  styleUrls: ['./payumoney.component.css']
})
export class PayumoneyComponent implements OnInit {

  @ViewChild("pumForm") pumForm;

  public payable = 0.00;

  public payuform: any = {};
  public disablePaymentButton: boolean = true;
  
  constructor(private _addressManagerService: AddressManagerService, 
    private _checkoutService: CheckoutService,
    private _orderService: OrderService,
    private _http: HttpService) { 
   
  }

  ngOnInit() {
   
  }

  public confirmPayment() {
    this.payable = this._orderService.getFinalOrder().payable;
    alert('on payOnline = ' + this.payable);
    let order = this._orderService.getFinalOrder();
    const paymentPayload = {
      email: order.userDetail.email,
      name: order.userDetail.name,
      phone: order.userDetail.phone,
      productInfo: order.items,
      amount: order.payable
    }
    return this._http.savePaymentDetails(paymentPayload).subscribe( data => {
      console.log(data);
      let res = data.json();
      this.payuform.firstname = res.name;
      this.payuform.email = res.email;
      this.payuform.phone = res.phone;
      this.payuform.productinfo = res.productInfo;
      this.payuform.amount = res.amount;
      this.payuform.txnid = res.txnId;
      this.payuform.surl = res.sUrl;
      this.payuform.furl = res.fUrl;
      this.payuform.key = res.key;
      this.payuform.hash = res.hash;
      
      this.disablePaymentButton = false;
      //this.pumForm.nativeElement.submit();
      
      let formData: FormData = new FormData(); 
      formData.append('firstname', res.name); 
      formData.append('email', res.email); 
      formData.append('phone', res.phone); 
      formData.append('productinfo', res.productInfo); 
      formData.append('amount', res.amount); 
      formData.append('txnid', res.txnId); 
      formData.append('surl', res.sUrl); 
      formData.append('furl', res.fUrl); 
      formData.append('key', res.key); 
      formData.append('hash', res.hash); 
      formData.append('service_provider', 'service_provider');
      let body = "firstname=" + res.name + "&email=" + res.email + "&phone=" + res.phone + "&productinfo=" + res.productInfo +
      "&amount=" + res.amount + "&txnid=" + res.txnId + "&surl=" + res.sUrl + "&furl=" + res.fUrl + "&key=" + res.key + "&hash=" + res.hash;
      //alert(formData);
      //this._http.submitToPayUmoney(body);
      }, 
      error1 => {
        console.log(error1);
        alert("Opps!!! something went wrong")
      })
  }
  
  /*public confirmPayment() {
    if (this.isDeliveryAddressComplete()) {
      alert(this.payuform.key);
    }
  }*/

  private isDeliveryAddressComplete(): boolean {
    const addressDone = this._addressManagerService.isDeliveryAddressComplete();
    if (!addressDone) {
      alert('No delivery address found. Please select your delivery address first.');
      return false;
    } else {
      return true;
    }
  }

}
