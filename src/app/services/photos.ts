import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import {Injectable} from "@angular/core";

@Injectable()
export class PhotoService{

    public base64Image: string;
    public savedImage: string;

    constructor(private camera: Camera, private base64ToGallery: Base64ToGallery){
    }

    public takePicture(callback, callback2){

        let code :number;

        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then((imageData) => {
            // imageData is a base64 encoded string
            this.savedImage = imageData;
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
           code = -1;
        }).then(callback).then(callback2);
    }

    public savedImageToGallery():number{
        let code : number;
        this.base64ToGallery.base64ToGallery(this.savedImage, { prefix: '_img' });
        return code;
    }

    public getLastPhoto():string{
        return this.base64Image;
    }

}
