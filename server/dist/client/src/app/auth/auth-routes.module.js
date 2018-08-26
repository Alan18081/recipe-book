"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const signin_component_1 = require("./signin/signin.component");
const signup_component_1 = require("./signup/signup.component");
const routes = [
    {
        path: 'signin',
        component: signin_component_1.SigninComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
];
let AuthRoutesModule = class AuthRoutesModule {
};
AuthRoutesModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AuthRoutesModule);
exports.AuthRoutesModule = AuthRoutesModule;
//# sourceMappingURL=auth-routes.module.js.map