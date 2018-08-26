"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const signin_component_1 = require("./signin/signin.component");
const signup_component_1 = require("./signup/signup.component");
const auth_service_1 = require("./auth.service");
const auth_routes_module_1 = require("./auth-routes.module");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    core_1.NgModule({
        declarations: [
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            auth_routes_module_1.AuthRoutesModule
        ],
        providers: [
            auth_service_1.AuthService
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map