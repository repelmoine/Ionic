import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Forms } from './forms';

import { PhotoService } from '../services/photos';

@Component({
  selector: 'page-ajouter',
  templateUrl: '../views/ajouter.html',
  providers: [PhotoService],
})
export class Ajouter {
  public base64Image: string;
  public savedImage: string;
  photoService : PhotoService;
    form = Forms;

  constructor(public navCtrl: NavController, photoService : PhotoService) {
    this.photoService = photoService;
    this.initButtons = this.initButtons.bind(this);
    this.getLastPicture = this.getLastPicture.bind(this);
  }

  public takePicture(){

      this.photoService.takePicture(this.initButtons,this.getLastPicture);
  }

  public getLastPicture(){
      this.base64Image = this.photoService.getLastPhoto();
  }

   initButtons(){
    let parent = document.getElementById('buttons');
    let button1 = document.createElement("button");
    let txt1 = document.createTextNode("Enregistrer");

    button1.setAttribute("class","save");
    button1.appendChild(txt1);
    parent.appendChild(button1);
    button1.addEventListener('click',(event)=>{
          let savedCode : number;


          this.photoService.savedImageToGallery();
          this.navCtrl.push('form', {picture: this.base64Image});

    });
  }
}
