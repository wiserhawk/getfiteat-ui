import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../service/payment.service';
import { CheckoutService } from '../../../service/checkout.service';
import { OrderService } from '../../../service/order.service';
import { AddressManagerService } from '../../../service/address-manager.service';
import { Router } from '@angular/router';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  //public payable = 0;

  constructor(private _paymentService: PaymentService, 
    private _addressManagerService: AddressManagerService, 
    private _orderService: OrderService,
    private _checkoutService: CheckoutService,
    private _cartService : CartService,
    private _router: Router) { 

  }

  ngOnInit() {
    //this.getPayableAmount();
  }

  public placeCashOrder() {
    if (this.isDeliveryAddressComplete()) {
      let order = this._orderService.getFinalOrder();
      order.paymentMode= "CASH";
      this._paymentService.placeCashOrder(order).subscribe(res => {
        const orderDetail = res.json(); // TODO - relplace orderDetail with object returned from server.
        /*this._orderService.storeOrderToLocalStorage(orderDetail);*/
        
        this._orderService.removeOrderFromLocalStorage();
        this._cartService.removeAllItemsFromCart();
        this._checkoutService.setPaymentDetails(orderDetail);
        this._checkoutService.setPaymentStatus(true);

        // Redirect from checkout page to order tracker page.
        this._router.navigateByUrl("track/"+orderDetail.orderId);
      },
      err => {
        this._checkoutService.setPaymentStatus(false);
        console.log("Error from server while placing order. error = " + err);
        alert("Opps!!! something went wrong while placing you order. Please try again.");
      });
    }
    
  }

  public placeOnlineOrder() {
    if (this.isDeliveryAddressComplete()) {
      let order = this._orderService.getFinalOrder();
      order.paymentMode= "ONLINE";
      this._paymentService.placeCashOrder(order);
    }
    // Redirect from checkout page to order tracker page.
    this._router.navigateByUrl("track");
  }

  private isDeliveryAddressComplete(): boolean {
    const addressDone = this._addressManagerService.isDeliveryAddressComplete();
    if (!addressDone) {
      alert('No delivery address found. Please select your delivery address first.');
      return false;
    } else {
      return true;
    }
  }

  /*private getPayableAmount() {
    let order = this._orderService.getFinalOrder();
    if (order) {
      this.payable = order.payable;
    }
  }*/

}
