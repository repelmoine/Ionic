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

    public androidAuth():number{
        this.androidFingerprintAuth.isAvailable()
            .then((result)=> {
                if(result.isAvailable){
                    this.androidFingerprintAuth.encrypt(this.basicModel)
                        .then(result => {
                            if (result.withFingerprint) {
                                this.code = 0;
                            } else if (result.withBackup) {
                                this.code = 0;
                            } else this.code = 1;
                        })
                        .catch(error => {
                            if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                                this.code = -1;
                            } else console.error(error)
                        });

                } else {
                    this.code = 2;
                }
            })
            .catch(error => {this.code = -1;});
        return this.code;
    }

    public iosAuth():number{
        this.touchId.isAvailable()
            .then(
                (res) => {
                    if(res.isAvailable){
                        this.touchId.verifyFingerprint('Scan your fingerprint please')
                            .then(
                                res => {
                                    this.code = 0;
                                },
                                err => {
                                    this.code = 1;
                                }
                            );
                    }else{
                        this.code = 2;
                    }
                    this.code = 1;
                }).catch(err => {this.code = -1;});

        return this.code;
    }
}