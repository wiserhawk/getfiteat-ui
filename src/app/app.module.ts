import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular/main';


import { AppComponent } from './app.component';
import { MainHeaderComponent } from './public/header/main-header/main-header.component';
import { MainFooterComponent } from './public/footer/main-footer/main-footer.component';
import { SideMenuComponent } from './public/menu/side-menu/side-menu.component';
import { CartBoxComponent } from './public/menu/cart-box/cart-box.component';
import { MinusPlusCounterComponent } from './public/controls/minus-plus-counter/minus-plus-counter.component';
import { HomeComponent } from './public/page/home/home.component';
import { ItemTileComponent } from './public/controls/item-tile/item-tile.component';
import { FoodItemService } from './service/food-item.service';
import { CartService } from './service/cart.service';
import { UserAccountCreatorComponent } from './public/controls/user-account-creator/user-account-creator.component';
import { CheckoutComponent } from './public/page/checkout/checkout.component';
import { DeliveryAddressCreatorComponent } from './public/controls/delivery-address-creator/delivery-address-creator.component';
import { BillDetailComponent } from './public/controls/bill-detail/bill-detail.component';
import { PaymentMethodComponent } from './public/controls/payment-method/payment-method.component';
import { PayumoneyComponent } from './public/controls/payment-method/payumoney/payumoney.component';
import { MealComponent } from './public/page/meal/meal.component';
import { UserLoginComponent } from './public/controls/user-login/user-login.component';
import { UserDetailComponent } from './public/controls/user-detail/user-detail.component';
import { UserManagerService } from './service/user-manager.service';
import { MultiStepProgressBarComponent } from './public/controls/multi-step-progress-bar/multi-step-progress-bar.component';
import { AddressCardsComponent } from './public/controls/address-cards/address-cards.component';
import { DeliveryAddressDetailComponent } from './public/controls/delivery-address-detail/delivery-address-detail.component';
import { AddressManagerService } from './service/address-manager.service';
import { CheckoutService } from './service/checkout.service';
import { PaymentService } from './service/payment.service';
import { OrderService } from './service/order.service';
import { TrackOrderComponent } from './public/page/track-order/track-order.component';
import { OrderDetailComponent } from './public/controls/order-detail/order-detail.component';
import { ResetPasswordComponent } from './public/controls/reset-password/reset-password.component';
import { LocalStorageService } from './service/local-storage.service';
import { NutritionFactComponent } from './public/controls/nutrition-fact/nutrition-fact.component';
import { HttpService } from './service/http.service';
import { LocationComponent } from './public/page/location/location.component';
import { LocationService } from './service/location.service';
import { VendorManagerService } from './service/vendor-manager.service';
import { AvailabilityZoneComponent } from './public/controls/availability-zone/availability-zone.component';
import { LoginPopupComponent } from './public/controls/login-popup/login-popup.component';
import { ErrorComponent } from './public/page/error/error.component';
import { VendorDashboardComponent } from './secure/page/vendor-dashboard/vendor-dashboard.component';
import { OrderGridComponent } from './secure/controls/order-grid/order-grid.component';
import { OrderDetailPopupComponent } from './secure/controls/order-detail-popup/order-detail-popup.component';
import { PartnerLoginPopupComponent } from './public/controls/partner-login-popup/partner-login-popup.component';
import { PartnershipRequestComponent } from './public/controls/partnership-request/partnership-request.component';
import { PaymentSuccessComponent } from './public/page/payment-success/payment-success.component';
import { PaymentFailureComponent } from './public/page/payment-failure/payment-failure.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'meal/:id', component: MealComponent },
  { path: 'track/:orderId', component: TrackOrderComponent },
  { path: 'location', component: LocationComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'payment/success', component: PaymentSuccessComponent },
  { path: 'payment/failure', component: PaymentFailureComponent },
  { path: 'secure/vendor/dashboard', component: VendorDashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    SideMenuComponent,
    CartBoxComponent,
    MinusPlusCounterComponent,
    HomeComponent,
    ItemTileComponent,
    UserAccountCreatorComponent,
    CheckoutComponent,
    DeliveryAddressCreatorComponent,
    BillDetailComponent,
    PaymentMethodComponent,
    PayumoneyComponent,
    MealComponent,
    UserLoginComponent,
    UserDetailComponent,
    MultiStepProgressBarComponent,
    AddressCardsComponent,
    DeliveryAddressDetailComponent,
    TrackOrderComponent,
    OrderDetailComponent,
    ResetPasswordComponent,
    NutritionFactComponent,
    LocationComponent,
    AvailabilityZoneComponent,
    LoginPopupComponent,
    ErrorComponent,
    VendorDashboardComponent,
    OrderGridComponent,
    OrderDetailPopupComponent,
    PartnerLoginPopupComponent,
    PartnershipRequestComponent,
    PaymentSuccessComponent,
    PaymentFailureComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    NgbModalModule,
    AgGridModule.withComponents(null),
  ],
  providers: [
    FoodItemService, 
    CartService,
    UserManagerService,
    AddressManagerService,
    CheckoutService,
    PaymentService,
    OrderService,
    LocalStorageService,
    HttpService,
    LocationService,
    VendorManagerService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AvailabilityZoneComponent,
    ResetPasswordComponent,
    LoginPopupComponent,
    UserLoginComponent,
    OrderDetailPopupComponent,
    PartnerLoginPopupComponent,
    PartnershipRequestComponent
  ]
})
export class AppModule { }
