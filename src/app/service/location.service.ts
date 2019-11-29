import { Injectable } from '@angular/core';
//import { Navigator } from '';


@Injectable()
export class LocationService {

  constructor() { }

  public findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        alert("latitude = " + position.coords.latitude + " longitude = " + position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported.");
    }
  }

  public findAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        alert("latitude = " + position.coords.latitude + " longitude = " + position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported.");
    }
  }

}
