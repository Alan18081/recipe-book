import {IsString, IsEmail, MinLength} from 'class-validator';

export class CreateUserDto {
  @IsString() username;

  @IsEmail() email;

  @IsString()
  @MinLength(4)
  password;
}