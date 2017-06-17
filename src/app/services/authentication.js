"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authModel_1 = require("../models/authModel");
var AuthService = (function () {
    function AuthService(androidFingerprintAuth, touchId) {
        this.androidFingerprintAuth = androidFingerprintAuth;
        this.touchId = touchId;
        this.basicModel = new authModel_1.AuthModel("159753", "admin", "password");
    }
    AuthService.prototype.androidAuth = function () {
        var _this = this;
        this.androidFingerprintAuth.isAvailable()
            .then(function (result) {
            if (result.isAvailable) {
                _this.androidFingerprintAuth.encrypt(_this.basicModel)
                    .then(function (result) {
                    if (result.withFingerprint) {
                        _this.code = 0;
                    }
                    else if (result.withBackup) {
                        _this.code = 0;
                    }
                    else
                        _this.code = 1;
                })
                    .catch(function (error) {
                    if (error === _this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                        _this.code = -1;
                    }
                    else
                        console.error(error);
                });
            }
            else {
                _this.code = 2;
            }
        })
            .catch(function (error) { _this.code = -1; });
        return this.code;
    };
    AuthService.prototype.iosAuth = function () {
        var _this = this;
        this.touchId.isAvailable()
            .then(function (res) {
            if (res.isAvailable) {
                _this.touchId.verifyFingerprint('Scan your fingerprint please')
                    .then(function (res) {
                    _this.code = 0;
                }, function (err) {
                    _this.code = 1;
                });
            }
            else {
                _this.code = 2;
            }
            _this.code = 1;
        }).catch(function (err) { _this.code = -1; });
        return this.code;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
