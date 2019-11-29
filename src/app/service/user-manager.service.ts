import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CheckoutService } from './checkout.service';
import { HttpService } from './http.service';

@Injectable()
export class UserManagerService {

  userLoginComplete: boolean = false;

  public userLoginCompleteSubject = new Subject<boolean>();

  userId: string;
  userDetail: any; // = UserLoginRequestValidator;

  constructor(private _checkoutService: CheckoutService, private _httpService: HttpService) {
    this.checkIfUserAlreadyLoggedIn();
  }

  public checkIfUserAlreadyLoggedIn() {
    //const userInfo = {"userId":"US00124", "name":"Manoj Sharma", "phone":"9958899824", "email":"mj.sharma009@gmail.com"};
    const userInfo = this._checkoutService.getUserDetails(); 
    if (userInfo) {
      this.userDetail = userInfo;
      this.userId = this.userDetail.userId;
      this.userLoginComplete = true;
      this._checkoutService.setLoginStatus(true);
      this.userLoginCompleteSubject.next(true);
    }
  }

  public doLogin(loginId: string, pwd: string) {
    if (loginId) {
      //userModel = this.getUserDetailByHttp(loginId, pwd);
     
        this._httpService.authenticateUser(loginId, pwd).subscribe(res => {
          let authDetail = res.json();
          if (authDetail.authentication) {
            this.userDetail = authDetail.userInfo;
            //return this.userDetail;
            let userModel = authDetail.userInfo;
            if (userModel) {
              this._checkoutService.setUserDetails(userModel);
              this.userId = userModel.userId; 
            }
        
            this.userLoginComplete = true;
            this._checkoutService.setLoginStatus(true);
            this.userLoginCompleteSubject.next(this.userLoginComplete);
            //return userModel.userId;
            
            // Reload entire page after login
            window.location.reload();
          } else {
            console.error("ERROR : Login failed. Invalid user or password.");
            alert('Opps!!! Login failed. Invalid user or password. \n Please try again');
          }
        },
        error => {
          console.error("ERROR : " + error);
          alert('Opps!!! Login failed. Invalid user or password. \n Please try again');
        });
        
      
      
    }
    /*if (userModel) {
      this._checkoutService.setUserDetails(userModel);
      this.userId = userModel.userId; 
    }

    this.userLoginComplete = true;
    this._checkoutService.setLoginStatus(true);
    this.userLoginCompleteSubject.next(this.userLoginComplete);*/
    //return userId;
  }

  public createUserAccount(data: any) {
    this._httpService.createUserAccount(data).subscribe(response => {
      if (response.status == 200) {
        let userModel = response.json();
        if (userModel) {
          this.userId = userModel.userId;
          this._checkoutService.setUserDetails(userModel);
          this.userLoginComplete = true;
          this._checkoutService.setLoginStatus(true);
          this.userLoginCompleteSubject.next(this.userLoginComplete);
          return this.userId;
        }
      } 
    },
    error => {
        alert(error._body);
    })
    
  }

  /*public getUserDetailByHttp(loginId: string, pwd: string): Observable<Response> {
    this._httpService.authenticateUser(loginId, pwd).subscribe(res => {
      let authDetail = res.json();
      this.userDetail = authDetail;
      return this.userDetail;
    });

    // TODO - Write http call to get user account details by userId
    // Write http call to get user account details by userId.
    //this.userDetail = {"userId":"US00124", "name":"Manoj Sharma", "phone":"9958899824", "email":"mj.sharma009@gmail.com"}; 
    //return this.userDetail;
  }*/

  public getUserDetail() {
    this.userDetail = this._checkoutService.getUserDetails();
    return this.userDetail;
  }

  public addObservableToUserLoginComplete(): Observable<boolean> {
    return this.userLoginCompleteSubject.asObservable();
  }

  public getUserId() {
    return this.userId;
  }

  public logoutUser() {
    // TODO -remove current user from Local storage.
    this.userId = null;
    this.userDetail = null;
    this.userLoginComplete = false;
    this._checkoutService.setLoginStatus(false);
    this._checkoutService.setDeliveryAddressStatus(false);
  }

  public isUserLoginComplete(): boolean {
    return this.userLoginComplete;
  }
 

}
