import { Component, OnInit, ViewChild } from '@angular/core';
import { UserManagerService } from '../../../service/user-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @ViewChild("userDetailTag") userDetailTag;
  
  isUserLoggedIn: boolean = false;
  loginControlVisible: boolean = true;
  message: string;
  checked: boolean = false;
  userName: string;

  userLoginCompleteSubscription: Subscription;


  constructor(private _userManagerService: UserManagerService) {

  }

  ngOnInit() {
    this.checkIfUserLoggedIn();

    // Subscrint event on userLoginComplete flag.
    this.userLoginCompleteSubscription = this._userManagerService.addObservableToUserLoginComplete().subscribe(flag => {
      this.checkIfUserLoggedIn();
      this.checked = flag;
      //this.completeUserAuthTask();
    });
  }

  toggle() {
    this.loginControlVisible = !this.loginControlVisible;
  }

  public logoutUser() {
    this.isUserLoggedIn = false;
    this.checked = false;
    this._userManagerService.logoutUser();
  }
 
  completeUserAuthTask() {
    if (this.checked) {
      this.userDetailTag.nativeElement.classList.add("finish");
    }
  }

  private checkIfUserLoggedIn() {
    const userDetail = this._userManagerService.getUserDetail();
    if (userDetail) {
      this.userName = userDetail.name;
      this.isUserLoggedIn = true;
      this.checked = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }

}
