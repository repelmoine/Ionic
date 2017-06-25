import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConnectedHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-connected-home',
  templateUrl: '../views/connected-home.html',
})
export class ConnectedHome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
