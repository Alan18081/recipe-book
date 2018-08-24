import {Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {CreateUserDto} from './dto/createUser.dto';
import {UsersService} from './users.service';
import {User} from './user.entity';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Request() req) {
    console.log('USerssds', req.user);
    return await this.usersService.findAll();
  }

  @Post()
  async createUser(@Body() userInfo: CreateUserDto): Promise<User> {
    const user = await this.usersService.findByEmail(userInfo.email);
    if(user) {
      throw new HttpException('User with this email already existt', HttpStatus.BAD_REQUEST);
    }
    return await this.usersService.createUser(userInfo);
  }
}