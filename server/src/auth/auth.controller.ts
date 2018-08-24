import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {LoginDto} from './dto/login.dto';
import {SignUpDto} from './dto/signup.dto';
import {UsersService} from '../users/users.service';
import {PasswordService} from '../core/password.service';
import {AuthService} from './auth.service';

@Controller('')
export class AuthController {

  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
    private readonly authService: AuthService
  ) {}

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
  async signUp(@Body() { username, email, password }: SignUpDto) {
    return 'Sign Up';
  }
}