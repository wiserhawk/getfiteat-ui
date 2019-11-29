import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailPopupComponent } from '../order-detail-popup/order-detail-popup.component';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {


  gridApi;
  gridColumnApi;

  rowSelection;

  columnDefs = [
    {headerName: 'Order No.', field: 'orderNo', width: 180, checkboxSelection: true},
    {headerName: 'Date', field: 'date', width: 150},
    {headerName: 'Status', field: 'status', width: 90},
    {headerName: 'Amount', field: 'amount', width: 90},
    {headerName: 'Payment', field: 'payment', width: 90}
];

rowData = [
    {orderNo: 'GFE-100014', date: '24 Dec 2018, 09:14 PM', items: 'Citrus Pomegranate Sprouts Salad \n Mega Chicken-Steak Salad \n', status: 'CONFIRM', phone: '99588998247', shipTo: "Manoj Sharma, HOME- Flat No. 301, J1/75A, Khirki Extension Malviya Nagar, South Delhi New Delhi -110017 Phone -9958899824", amount: "560.00", payment: "CASH" },
    {orderNo: 'GFE-100014', date: '24 Dec 2018, 09:14 PM', items: 'Citrus Pomegranate Sprouts Salad \n Mega Chicken-Steak Salad \n', status: 'CONFIRM', phone: '99588998247', shipTo: "Manoj Sharma, HOME- Flat No. 301, J1/75A, Khirki Extension Malviya Nagar, South Delhi New Delhi -110017 Phone -9958899824", amount: "560.00", payment: "CASH" },
    {orderNo: 'GFE-100014', date: '24 Dec 2018, 09:14 PM', items: 'Citrus Pomegranate Sprouts Salad \n Mega Chicken-Steak Salad \n', status: 'CONFIRM', phone: '99588998247', shipTo: "Manoj Sharma, HOME- Flat No. 301, J1/75A, Khirki Extension Malviya Nagar, South Delhi New Delhi -110017 Phone -9958899824", amount: "560.00", payment: "CASH" },
];

  constructor(private modalService: NgbModal) { 
    this.rowSelection = "single";
  }

  ngOnInit() {
  }


  public onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.orderNo;
    });
    //alert('selected Order Id = ' + selectedRowsString);
    this.openOrderDetailModal(selectedRowsString);
  }

  public onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // TODO - Send http call to load data for order grid.
    //this.rowData = http.getOrdersByVendorId()
  
  }

  public openOrderDetailModal(orderId: string) {
    const modalRef = this.modalService.open(OrderDetailPopupComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
