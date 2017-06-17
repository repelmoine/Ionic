"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ajouter_1 = require("./ajouter");
var connected_home_1 = require("./connected-home");
var gallery_1 = require("./gallery");
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = connected_home_1.ConnectedHome;
        this.tab2Root = ajouter_1.Ajouter;
        this.tab3Root = gallery_1.Gallery;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    core_1.Component({
        templateUrl: '../views/tabs.html'
    })
], TabsPage);
exports.TabsPage = TabsPage;
