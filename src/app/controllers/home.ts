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
    code : number;

  public constructor(public navCtrl: NavController, public plt: Platform, authService : AuthService) {
      this.authService = authService;
  }

  public login(){
      if(this.plt.is('ios')){
          this.initIosFingerPrint();
      }else if(this.plt.is('android')){
          this.initAndroidFingerPrint();
      }
      this.navCtrl.push('connected');
  }

  public initAndroidFingerPrint(){
      this.code = this.authService.androidAuth();

  }

  public initIosFingerPrint(){
      this.authService.iosAuth();
  }

  public codeGesture(code: number){
      switch (this.code){
          case 0:
              this.navCtrl.push('connected');
          case 1:
          // aucun résultat ne correspond
          case 2:
          // fingerprint indisponible
          case -1:
          // authentication error
      }
  }
}
