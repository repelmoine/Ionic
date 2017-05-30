import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';

@Component({
  selector: 'page-about',
  templateUrl: 'ajouter.html'
})
export class Ajouter {

  constructor(private androidFingerprintAuth: AndroidFingerprintAuth) {
      console.log("ajouter");
      this.init();
  }

  public init(){
      this.androidFingerprintAuth.isAvailable()
          .then((result)=> {
              if(result.isAvailable){
                 console.log("ok");

                  this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
                      .then(result => {
                          if (result.withFingerprint) {
                              console.log('Successfully encrypted credentials.');
                              console.log('Encrypted credentials: ' + result.token);
                          } else if (result.withBackup) {
                              console.log('Successfully authenticated with backup password!');
                          } else console.log('Didn\'t authenticate!');
                      })
                      .catch(error => {
                          if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                              console.log('Fingerprint authentication cancelled');
                          } else console.error(error)
                      });

              } else {
                  console.log("no");
              }
          })
          .catch(error => console.log(error));
  }
}
