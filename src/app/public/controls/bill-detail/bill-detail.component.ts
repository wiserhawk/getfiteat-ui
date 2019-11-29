import { CartService } from '../../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../service/order.service';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  billingItems = [];

  itemPrice = 0;
  deliveryCharge = 0;
  gst = 0;
  cgst = 0;
  sgst = 0;
  couponDiscount = 0;
  payable = 0;
  coupon = null;
  
  couponMessage = "No coupon applied yet";
  couponApplied: boolean = false;

  cartItemsSubscription: Subscription;
  
  constructor(private _cartService: CartService, private _orderService: OrderService, private _httpService: HttpService) { 
    
  }

  ngOnInit() {
    this.billingItems = this._cartService.loadCartDetailsFromLocalStorage();
    this.updateBilling();
    
    // Subscribe cart items observable
    this.cartItemsSubscription = this._cartService.addObservableToCartItems().subscribe(items => {
      this.billingItems = items;
      this.updateBilling();
    });
}

updateBilling() {

  let request = this.createBillingRequestJson(this.coupon, this.billingItems);
  this._httpService.calculateBill(request).subscribe(res => {
    let bill = res.json();
    this.itemPrice = bill.totalPrice.toFixed(2);
    this.deliveryCharge = bill.deliveryCharge.toFixed(2);
    this.gst = bill.gst.toFixed(2);
    this.cgst = bill.cgst.toFixed(2);
    this.sgst = bill.sgst.toFixed(2);
    this.couponDiscount = bill.couponDiscount.toFixed(2);
    this.payable = bill.payable.toFixed(2);
    this.updateFinalOrder();
  })

  
  /*let total = 0;
  if (this.billingItems) {
    this.billingItems.forEach(item => {
      const price = item.netPrice;
      const quantity = item.quantity;
      total += price * quantity;   
    });
    this.itemPrice = total;
    let deliveyFee = 0;
    if (this.itemPrice < 200) {
      deliveyFee = 50;
    }
    
    this.deliveryCharge = deliveyFee;
    const gstPercent = 5;
    this.gst = (this.itemPrice * gstPercent)/100;
    this.cgst = this.sgst = this.gst/2;
    
    this.payable = (this.itemPrice + this.deliveryCharge + this.gst - this.couponDiscount);
  }*/

 
}

  deteleItemFromCart(id) {
    this._cartService.removeItemFromCart(id);
  }

  applyCoupon(coupon: string) {
    if (coupon == null || coupon == "") {
      this.couponMessage = "Empty coupon";
      this.couponApplied = false;
      return;
    }
    
    let isValidCoupon = false;
    this._httpService.isValidCoupon(coupon).subscribe(res => {
      if (res.json() == true) {
        isValidCoupon = true; 
      }
      if (isValidCoupon) {
        this.coupon = coupon.toLocaleUpperCase();
        this.updateBilling();
        this.couponMessage = this.coupon + " Coupon applied successfully";
        this.couponApplied = true;   
      } else {
        this.coupon = null;
        this.couponMessage = "Not a valid Coupon";
        this.couponApplied = false;  
      }
    });

    
  }

  private updateFinalOrder() {
    let order = this._orderService.getFinalOrder();
    order.items = this.billingItems;
    order.itemPrice = this.itemPrice;
    order.deliveryCharge = this.deliveryCharge;
    order.gst = this.gst;
    order.cgst = this.cgst;
    order.sgst = this.sgst;
    order.coupon = this.coupon;
    order.couponDiscount = this.couponDiscount,
    order.payable = this.payable;
    this._orderService.setFinalOrder(order);
  }

  private createBillingRequestJson(coupon: string, items: any) : any {
    let itemList: any = [];
      
    items.forEach(i => {
      let item = {
        id: i.itemId,
        name: i.itemName,
        price: i.netPrice,
        quantity: i.quantity,
        type: i.type
      }
      itemList.push(item);
    });

    let request = {coupon: coupon , itemList: itemList};
    return request;
  }

  

  

}

/*class BillRequest {
  coupon: string;
  itemList: Array<Item>;
  constructor(coupon: string, itemList: Array<Item>) {
    this.coupon = coupon;
    this.itemList = itemList;
  }

  addItem(item: Item) {
    this.itemList.push(item);
  }

}

class Item {
  id: string;
  name: string;
  price: string;
  quantity: string;
  type: string;

  constructor(id: string, name: string, price: string, quantity: string, type: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.type = type;
  }

}*/


