import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the GalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: '../views/gallery.html',
})
export class Gallery {

  photos: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFireDatabase) {
    this.photos = af.list("/photos");
  }
}
