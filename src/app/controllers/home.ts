import { Component } from '@angular/core';
import { Connected } from './connected';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { AuthService } from "../services/authentication";


declare var window: any;

@Component({
  templateUrl: '../views/home.html',
  providers: [AuthService]
})
export class HomePage {

    connected = Connected;
    authService : AuthService;

  public constructor(public navCtrl: NavController, public plt: Platform, authService : AuthService) {
      this.authService = authService;
      this.redirectConnected = this.redirectConnected.bind(this);
  }

  public login(){
      if(this.plt.is('ios')){
          this.initIosFingerPrint();
      }else if(this.plt.is('android')){
          this.initAndroidFingerPrint();
      }else{
          this.navCtrl.push('connected');
      }
  }

  public initAndroidFingerPrint(){
      this.authService.androidAuth(this.redirectConnected);


  }

  public initIosFingerPrint(){
      this.authService.iosAuth(this.redirectConnected);
  }

  public redirectConnected(){
      this.navCtrl.push('connected')
  }
}
