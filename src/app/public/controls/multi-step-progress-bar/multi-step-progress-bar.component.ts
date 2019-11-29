import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckoutService } from '../../../service/checkout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multi-step-progress-bar',
  templateUrl: './multi-step-progress-bar.component.html',
  styleUrls: ['./multi-step-progress-bar.component.css']
})
export class MultiStepProgressBarComponent implements OnInit {

  @ViewChild("loginStep") loginStep;
  @ViewChild("addressStep") addressStep;
  @ViewChild("paymentStep") paymentStep;

  loginStepSubscription: Subscription;
  deliveryAddresStepSubscription: Subscription;
  paymentStepSubscription: Subscription;
  
  constructor(private _checkoutService: CheckoutService) { 

  }

  ngOnInit() {
    this.loginStepSubscription = this._checkoutService.addObserverTologinStep().subscribe(loginStatus => {
      this.refreshProgress();
    });

    this.deliveryAddresStepSubscription = this._checkoutService.addObserverToDeliveryAddressStep().subscribe(addressStatus => {
      this.refreshProgress();
    })

    this.paymentStepSubscription = this._checkoutService.addObserverToPaymentStep().subscribe(paymentStatus => {
      this.refreshProgress();
    });

    this.refreshProgress();
  }

  /**
   * Adding CSS class 'active' to show progess on Checkout Page.
   */
  refreshProgress() {
    if (this._checkoutService.isLoginDone()) {
      this.loginStep.nativeElement.classList.add("active");
    } else {
      this.loginStep.nativeElement.classList.remove("active");
    }
    if (this._checkoutService.isDeliveryAddressDone()) {
      this.addressStep.nativeElement.classList.add("active");
    }
    if (this._checkoutService.isPaymentDone()) {
      this.paymentStep.nativeElement.classList.add("active");
    }
  }

}
