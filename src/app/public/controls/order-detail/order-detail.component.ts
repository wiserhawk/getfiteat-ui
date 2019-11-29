import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { CheckoutService } from '../../../service/checkout.service';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() orderId;

  @ViewChild("confirm") confirmTag;
  @ViewChild("shipped") shippedTag;
  @ViewChild("delivered") deliveredTag;

  public orderDetail;

  
  orderList: any = [];
  
  // ordre status
  confirm: boolean = false;
  shipped: boolean = false;
  delivered: boolean = false;

  constructor(private _cartService: CartService,
      private _checkoutService: CheckoutService, private _http : HttpService) {
      this.orderList = this._cartService.cartItems;
      

      //alert('Open OrderDetails for oderId=' + this.orderId);
  }

  ngOnInit() {
    alert('Open OrderDetails for oderId=' + this.orderId);
    this._http.getOrderDetail(this.orderId).subscribe(res => {
      //alert(res.json().orderDate);
      this.orderDetail = res.json();
      this.refreshOrderStatus(this.orderDetail.orderStatus);
    });
    //this.refreshOrderStatus();
    alert(this._checkoutService.getPaymentDetails().orderId);
  }

  /* This method need to be rerun priodically */
  private refreshOrderStatus(status: string) {
    if (this.delivered) {
      return;
    }
    // get order status from server.
    //let status = "delivered";
    if (status == "CONFIRMED" || status == "ASSIGNED") {
      this.confirm = true;
    }
    if (status == "SHIPPED") {
      this.shipped = true;
    }
    if (status == "DELIVERED") {
      this.delivered = true;
    }
    this.updateOrderProgress();
  }

  private updateOrderProgress() {
    if (this.confirm) {
      this.confirmTag.nativeElement.classList.add("active");
    }
    if (this.shipped) {
      this.confirmTag.nativeElement.classList.add("active");
      this.shippedTag.nativeElement.classList.add("active");
    }
    if (this.delivered) {
      this.confirmTag.nativeElement.classList.add("active");
      this.shippedTag.nativeElement.classList.add("active");
      this.deliveredTag.nativeElement.classList.add("active");
    }
  }

}
