import {Body, Controller, HttpCode, HttpException, HttpStatus, Post, Get, UseGuards, Req} from '@nestjs/common';
import {LoginDto} from './dto/login.dto';
import {SignUpDto} from './dto/signup.dto';
import {UsersService} from '../users/users.service';
import {PasswordService} from '../core/password.service';
import {AuthService} from './auth.service';
import {User} from '../users/user.entity';
import {AuthGuard} from '@nestjs/passport';

@Controller('')
export class AuthController {

  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
    private readonly authService: AuthService
  ) {}

  @Get('currentUser')
  @UseGuards(AuthGuard('jwt'))
  getUserByToken(@Req() req): User {
    if(!req.user) {
      throw new HttpException('Token is not valid', HttpStatus.UNAUTHORIZED);
    }
    return req.user;
  }

  @Post('login')
  async login(@Body() { email, password }: LoginDto) {
    const user = await this.usersService.findByEmail(email);
    if(!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const isValidPassword = await this.passwordService.comparePassword(password, user.password);
    if(!isValidPassword) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    return await this.authService.createToken(email, user.id);
  }

  @Post('signup')
  @HttpCode(200)
  async signUp(@Body() userInfo: SignUpDto) {
    const user = await this.usersService.findByEmail(userInfo.email);
    if(user) {
      throw new HttpException('User with this email already exists', HttpStatus.FOUND);
    }
    const newUser = await this.usersService.createUser(userInfo);
    delete newUser.password;
    const token = await this.authService.createToken(newUser.email, newUser.id);
    return <{user: User, token: string, expiresIn: string}>{
      user: newUser,
      ...token
    }
  }
}