"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
/**
 * Generated class for the FormsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Forms = (function () {
    function Forms(navCtrl, navParams, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pic = {
            title: "",
            description: "",
            photo: ""
        };
        this.base64Image = navParams.get("picture");
        this.pic.photo = this.base64Image;
        this.photos = af.list('/photos');
        //this.initFirebase();
    }
    Forms.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormsPage');
    };
    Forms.prototype.logForm = function (form) {
        console.log(this.pic.title);
        this.photos.push(this.pic);
    };
    Forms.prototype.initFirebase = function () {
    };
    return Forms;
}());
Forms = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-forms',
        templateUrl: '../views/forms.html',
    })
], Forms);
exports.Forms = Forms;
