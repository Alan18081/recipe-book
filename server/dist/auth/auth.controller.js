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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const login_dto_1 = require("./dto/login.dto");
const signup_dto_1 = require("./dto/signup.dto");
const users_service_1 = require("../users/users.service");
const password_service_1 = require("../core/password.service");
const auth_service_1 = require("./auth.service");
const user_entity_1 = require("../users/user.entity");
const passport_1 = require("@nestjs/passport");
let AuthController = class AuthController {
    constructor(usersService, passwordService, authService) {
        this.usersService = usersService;
        this.passwordService = passwordService;
        this.authService = authService;
    }
    getUserByToken(req) {
        if (!req.user) {
            throw new common_1.HttpException('Token is not valid', common_1.HttpStatus.UNAUTHORIZED);
        }
        return req.user;
    }
    login({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findByEmail(email);
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            const isValidPassword = yield this.passwordService.comparePassword(password, user.password);
            if (!isValidPassword) {
                throw new common_1.HttpException('Invalid password', common_1.HttpStatus.UNAUTHORIZED);
            }
            return yield this.authService.createToken(email, user.id);
        });
    }
    signUp(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findByEmail(userInfo.email);
            if (user) {
                throw new common_1.HttpException('User with this email already exists', common_1.HttpStatus.FOUND);
            }
            const newUser = yield this.usersService.createUser(userInfo);
            delete newUser.password;
            const token = yield this.authService.createToken(newUser.email, newUser.id);
            return Object.assign({ user: newUser }, token);
        });
    }
};
__decorate([
    common_1.Get('currentUser'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", user_entity_1.User)
], AuthController.prototype, "getUserByToken", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('signup'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
AuthController = __decorate([
    common_1.Controller(''),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        password_service_1.PasswordService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map