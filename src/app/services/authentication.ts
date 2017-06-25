import { TouchID } from '@ionic-native/touch-id';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import {Injectable} from "@angular/core";
import {AuthModel} from "../models/authModel";

@Injectable()
export class AuthService{

    basicModel : any;
    code : number;


    constructor(private androidFingerprintAuth: AndroidFingerprintAuth, private touchId: TouchID){
        this.basicModel = new AuthModel("159753","admin","password");
    }

    public androidAuth(callback) {
        this.androidFingerprintAuth.isAvailable()
            .then((result)=> {
                if(result.isAvailable){
                    this.androidFingerprintAuth.encrypt(this.basicModel)
                        .then(result => {
                            if (result.withFingerprint) {
                            } else if (result.withBackup) {
                            } else this.code = 1;
                        }).then(callback)
                        .catch(error => {});
                }
            })
            .catch(error => {this.code = -1;});
    }

    public iosAuth(callback){
        this.touchId.isAvailable()
            .then(
                (res) => {
                    if(res.isAvailable){
                        this.touchId.verifyFingerprint('Scan your fingerprint please')
                            .then(callback)
                    }
                }).catch(err => {this.code = -1;});

    }
}