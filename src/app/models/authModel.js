"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthModel = (function () {
    function AuthModel(clientId, username, password) {
        this.clientId = clientId;
        this.username = username;
        this.password = password;
    }
    return AuthModel;
}());
exports.AuthModel = AuthModel;
