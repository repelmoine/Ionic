"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ionic_angular_1 = require("ionic-angular");
var app_component_1 = require("./app.component");
var android_fingerprint_auth_1 = require("@ionic-native/android-fingerprint-auth");
var touch_id_1 = require("@ionic-native/touch-id");
var camera_1 = require("@ionic-native/camera");
var base64_to_gallery_1 = require("@ionic-native/base64-to-gallery");
var ajouter_1 = require("./controllers/ajouter");
var home_1 = require("./controllers/home");
var tabs_1 = require("./controllers/tabs");
var connected_1 = require("./controllers/connected");
var connected_home_1 = require("./controllers/connected-home");
var forms_1 = require("./controllers/forms");
var status_bar_1 = require("@ionic-native/status-bar");
var splash_screen_1 = require("@ionic-native/splash-screen");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
exports.firebaseConfig = {
    apiKey: "AIzaSyCPwhlvOkwf5O1KKQrBHzcNOlAAoDz5SvY",
    authDomain: "ionic-project-167212.firebaseapp.com",
    databaseURL: "https://ionic-project-167212.firebaseio.com",
    projectId: "ionic-project-167212",
    storageBucket: "ionic-project-167212.appspot.com",
    messagingSenderId: "318644373180"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp,
            ajouter_1.Ajouter,
            home_1.HomePage,
            tabs_1.TabsPage,
            connected_1.Connected,
            connected_home_1.ConnectedHome,
            forms_1.Forms
        ],
        imports: [
            platform_browser_1.BrowserModule,
            angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig),
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp, {}, {
                links: [
                    { component: connected_1.Connected, name: 'connected', segment: 'connected' },
                    { component: forms_1.Forms, name: 'form', segment: 'form' }
                ]
            })
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp,
            ajouter_1.Ajouter,
            home_1.HomePage,
            tabs_1.TabsPage,
            connected_1.Connected,
            connected_home_1.ConnectedHome,
            forms_1.Forms
        ],
        providers: [
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            android_fingerprint_auth_1.AndroidFingerprintAuth,
            touch_id_1.TouchID,
            camera_1.Camera,
            base64_to_gallery_1.Base64ToGallery,
            database_1.AngularFireDatabase,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
