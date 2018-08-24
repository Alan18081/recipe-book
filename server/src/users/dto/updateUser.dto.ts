import {IsString, IsEmail, MinLength, IsNumber} from 'class-validator';

export class UpdateUserDto {
  @IsNumber() readonly id;

  @IsString() readonly username;

  @IsEmail() readonly email;

  @IsString()
  @MinLength(4) readonly password;
}