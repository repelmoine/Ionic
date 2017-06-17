import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { TouchID } from '@ionic-native/touch-id';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

import { Ajouter } from './controllers/ajouter';
import { HomePage } from './controllers/home';
import { TabsPage } from './controllers/tabs';
import { Connected } from './controllers/connected';
import { ConnectedHome } from './controllers/connected-home';
import { Forms } from './controllers/forms';
import { Gallery } from './controllers/gallery';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: "AIzaSyCPwhlvOkwf5O1KKQrBHzcNOlAAoDz5SvY",
  authDomain: "ionic-project-167212.firebaseapp.com",
  databaseURL: "https://ionic-project-167212.firebaseio.com",
  projectId: "ionic-project-167212",
  storageBucket: "ionic-project-167212.appspot.com",
  messagingSenderId: "318644373180"
};

@NgModule({
  declarations: [
    MyApp,
    Ajouter,
    HomePage,
    TabsPage,
    Connected,
    ConnectedHome,
    Forms,
    Gallery
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: Connected, name: 'connected', segment: 'connected' },
        { component: Forms, name: 'form', segment: 'form' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Ajouter,
    HomePage,
    TabsPage,
    Connected,
    ConnectedHome,
    Forms,
    Gallery
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidFingerprintAuth,
    TouchID,
    Camera,
    Base64ToGallery,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
