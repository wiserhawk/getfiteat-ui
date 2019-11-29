import { Injectable } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { OrderService } from './order.service';
import { HttpService } from './http.service';

@Injectable()
export class PaymentService {

  constructor(private _checkoutService: CheckoutService, private _orderService: OrderService, private _httpService: HttpService) { }

  public placeCashOrder(order: any) {
    // TODO - Write http call to place final order on system and generate a unique OrderNumber for Order.
    alert('Order placed as cash on delivery \n' + JSON.stringify(order));
    let orderObject = this.createOrderObject(order);
    return this._httpService.placeOrder(orderObject)
  }

  public placeOnlineOrder(order: any) {
    // Set payment mode.
    order.payment = "online";
   // TODO - Write http call to place final order on system and generate a unique OrderNumber for Order.
   let orderDetails = [] // Get order for checkout service to place it on server.
   alert('Order placed as online payment done');
   let orderNumer = "HS00001245";
   this._checkoutService.setPaymentDetails(orderDetails);
   this._checkoutService.setPaymentStatus(true);
   return orderNumer;
  }

  private createOrderObject(order: any): any {
    let orderObj = {
      "billTo": "",
      "shipTo": "",
      "contactNumber": "",
      "customerName": "",
      "email": "",
      //"orderDate": "2019-03-08T08:13:32.282Z",
      "paymentMode": "CASH",
      //"transactionId": "TX124587",
      "userId": "",
      "bill": {
        //"billDate": "2019-03-08T08:13:32.282Z",
        "customerName": "",
        "contactNumber": "",
        "coupon": "",
        "totalPrice": "",
        "deliveryCharge":"",
        "gst": "",
        "sgst": "",
        "cgst": "",
        "couponDiscount": "",
        "payable": "",
        "itemsList": []
      }
    };

    orderObj.paymentMode = order.paymentMode;
    let address = order.address;
    orderObj.billTo = address.street + " " + address.area + " " + address.state + " - " + address.pincode;
    orderObj.shipTo = address.street + " " + address.area + " " + address.state + " - " + address.pincode;
    orderObj.contactNumber = order.userDetail.phone;
    orderObj.customerName = order.userDetail.name;
    orderObj.email = order.userDetail.email;
    orderObj.userId = order.userDetail.userId;
    orderObj.bill.customerName = order.userDetail.name;
    orderObj.bill.contactNumber = order.userDetail.phone;
    orderObj.bill.coupon = order.coupon;
    orderObj.bill.totalPrice = order.itemPrice;
    orderObj.bill.deliveryCharge = order.deliveryCharge;
    orderObj.bill.couponDiscount = order.couponDiscount;
    orderObj.bill.gst = order.gst;
    orderObj.bill.cgst = order.cgst;
    orderObj.bill.sgst = order.sgst;
    orderObj.bill.payable = order.payable;
    
    let itemList: any = [];
    order.items.forEach(i => {
      let item = {
        itemId: i.itemId,
        name: i.itemName,
        price: i.netPrice,
        quantity: i.quantity,
        type: i.type
      }
      itemList.push(item);
    });
    
    orderObj.bill.itemsList = itemList;
    return orderObj;

  } 

}
