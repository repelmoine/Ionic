import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Forms } from './forms';

import { PhotoService } from '../services/photos';

@Component({
  selector: 'page-ajouter',
  templateUrl: '../views/ajouter.html',
  providers: [PhotoService]
})
export class Ajouter {
  public base64Image: string;
  public savedImage: string;
  photoService : PhotoService;
    form = Forms;

  constructor(public navCtrl: NavController, photoService : PhotoService) {
    this.photoService = photoService;
  }

  public takePicture(){
    this.photoService.takePicture();
  }

  public initButtons(){
    let parent = document.getElementById('buttons');
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let txt1 = document.createTextNode("Enregistrer");
    let txt2 = document.createTextNode("Annuler");

    button1.setAttribute("id","save");
    button2.setAttribute("id","cancel");

    button1.appendChild(txt1);
    button2.appendChild(txt2);

    parent.appendChild(button1);
    parent.appendChild(button2);

    button1.addEventListener('click',(event)=>{
          let savedCode : number;

          this.navCtrl.push('form', {picture: this.photoService.getLastPhoto()});
          savedCode = this.photoService.savedImageToGallery();
          if(savedCode == 0){
            console.log("Image saved in gallery");
          }

    });

    button2.addEventListener('click',(event)=>{
        this.navCtrl.pop();
    });
  }
}
