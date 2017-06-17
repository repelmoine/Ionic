"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connected_1 = require("./connected");
var authentication_1 = require("../services/authentication");
var HomePage = (function () {
    function HomePage(navCtrl, plt, authService) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.connected = connected_1.Connected;
        this.authService = authService;
    }
    HomePage.prototype.login = function () {
        if (this.plt.is('ios')) {
            this.initIosFingerPrint();
        }
        else if (this.plt.is('android')) {
            this.initAndroidFingerPrint();
        }
        this.navCtrl.push('connected');
    };
    HomePage.prototype.initAndroidFingerPrint = function () {
        this.code = this.authService.androidAuth();
    };
    HomePage.prototype.initIosFingerPrint = function () {
        this.authService.iosAuth();
    };
    HomePage.prototype.codeGesture = function (code) {
        switch (this.code) {
            case 0:
                this.navCtrl.push('connected');
            case 1:
            // aucun résultat ne correspond
            case 2:
            // fingerprint indisponible
            case -1:
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        templateUrl: '../views/home.html',
        providers: [authentication_1.AuthService]
    })
], HomePage);
exports.HomePage = HomePage;
