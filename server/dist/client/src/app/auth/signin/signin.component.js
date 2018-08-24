"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const store_1 = require("@ngrx/store");
const AuthActions = require("../store/auth.actions");
let SigninComponent = class SigninComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    submit(form) {
        const { email, password } = form.value;
        this.store.dispatch(new AuthActions.Login({
            email,
            password
        }));
    }
};
SigninComponent = __decorate([
    core_1.Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object])
], SigninComponent);
exports.SigninComponent = SigninComponent;
var _a;
//# sourceMappingURL=signin.component.js.map