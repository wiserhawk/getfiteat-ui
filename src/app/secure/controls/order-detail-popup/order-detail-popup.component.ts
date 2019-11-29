import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-detail-popup',
  templateUrl: './order-detail-popup.component.html',
  styleUrls: ['./order-detail-popup.component.css']
})
export class OrderDetailPopupComponent implements OnInit {

  @ViewChild("confirm") confirmTag;
  @ViewChild("shipped") shippedTag;
  @ViewChild("delivered") deliveredTag;

  orderNumber = "HS001124587";
  date = "Nov 19, 2018, 09:30 PM";
  payment = "Online";
  phone = "9958899824";
  userDetail = {"userId":"US00124", "name":"Manoj Sharma", "phone":"9958899824", "email":"mj.sharma009@gmail.com"};
  address: any = { 
    "addressNum" : "USER001_ADD03",
    "addressType" : "OFFICE",
    "street" : "IHS Markit, 9th Floor, Ambience Corporate Tower, Ambience Iceland, Sector-3",
    "area" : "Gurugram",
    "state" : "Haryana",
    "pincode" : "102356",
    "phone" : "9958899824"
  };
  orderList: any = []
  itemPrice = 1000;
  deliveryCharge = 0;
  gst = 50;
  cgst = 25;
  sgst = 25;
  couponDiscount = 0;
  payable = 1050;

  // ordre status
  confirm: boolean = false;
  shipped: boolean = false;
  delivered: boolean = false;

  constructor(private _cartService: CartService, public activeModal: NgbActiveModal) {
    this.orderList = this._cartService.cartItems;
  }

  ngOnInit() {
    this.refreshOrderStatus();
  }

  /* This method need to be rerun priodically */
  private refreshOrderStatus() {
    if (this.delivered) {
      return;
    }
    // get order status from server.
    let status = "delivered";
    if (status == "confirm") {
      this.confirm = true;
    }
    if (status == "shipped") {
      this.shipped = true;
    }
    if (status == "delivered") {
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

  public closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
