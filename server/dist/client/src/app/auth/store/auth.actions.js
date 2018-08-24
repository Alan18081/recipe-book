"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = 'LOGIN';
exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
exports.SIGN_UP = 'SIGN_UP';
exports.LOGOUT = 'LOGOUT';
exports.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
exports.SET_TOKEN = 'SET_TOKEN';
class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.LOGIN;
    }
}
exports.Login = Login;
class LoginSuccess {
    constructor() {
        this.type = exports.LOGIN_SUCCESS;
    }
}
exports.LoginSuccess = LoginSuccess;
class SignUp {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.SIGN_UP;
    }
}
exports.SignUp = SignUp;
class Logout {
    constructor() {
        this.type = exports.LOGOUT;
    }
}
exports.Logout = Logout;
class SetToken {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.SET_TOKEN;
    }
}
exports.SetToken = SetToken;
//# sourceMappingURL=auth.actions.js.map