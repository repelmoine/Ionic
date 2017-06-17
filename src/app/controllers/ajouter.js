"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("./forms");
var Ajouter = (function () {
    function Ajouter(navCtrl, camera, base64ToGallery) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.base64ToGallery = base64ToGallery;
        this.form = forms_1.Forms;
        //this.init();
    }
    Ajouter.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.savedImage = imageData;
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.initButtons();
        }, function (err) {
            console.log(err);
        });
    };
    Ajouter.prototype.init = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image2 = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    Ajouter.prototype.initButtons = function () {
        var _this = this;
        var parent = document.getElementById('buttons');
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var txt1 = document.createTextNode("Enregistrer");
        var txt2 = document.createTextNode("Annuler");
        button1.setAttribute("id", "save");
        button2.setAttribute("id", "cancel");
        button1.setAttribute("style", "float:left; margin-bottom:20px; margin-top:20px;padding:10px;background:lightblue;margin-left:20px;");
        button2.setAttribute("style", "float:right; margin-bottom:20px; margin-top:20px;padding:10px;background:red;margin-right:20px;");
        button1.appendChild(txt1);
        button2.appendChild(txt2);
        parent.appendChild(button1);
        parent.appendChild(button2);
        button1.addEventListener('click', function (event) {
            _this.navCtrl.push('form', { picture: _this.base64Image });
            /* this.base64ToGallery.base64ToGallery(this.savedImage, { prefix: '_img' }).then(
                 (res) => {
                     console.log('Saved image to gallery ', res)
                     this.navCtrl.push('form', this.base64Image);
                 }*/
            // err => this.navCtrl.push('form',this.base64Image)
        });
        button2.addEventListener('click', function (event) {
            _this.navCtrl.pop();
        });
    };
    return Ajouter;
}());
Ajouter = __decorate([
    core_1.Component({
        selector: 'page-about',
        templateUrl: '../views/ajouter.html'
    })
], Ajouter);
exports.Ajouter = Ajouter;
