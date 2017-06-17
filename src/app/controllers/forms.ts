import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

/**
 * Generated class for the FormsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: '../views/forms.html',
})
export class Forms {

  public base64Image: string;
  public url : string;
  public photos: FirebaseListObservable<any>;

  pic = {
    title: "",
    description: "",
    photo: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFireDatabase) {
    this.base64Image = navParams.get("picture");
    this.pic.photo = this.base64Image;
    this.photos = af.list('/photos');
    //this.initFirebase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

  logForm(form) {

    console.log(this.pic.title);
    this.photos.push(this.pic);
  }

  private initFirebase() {

  }
}
