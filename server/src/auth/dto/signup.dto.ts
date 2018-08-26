import {IsString, MinLength, IsEmail} from 'class-validator';

export class SignUpDto {
  @IsString() username: string;

  @IsEmail() email: string;

  @IsString()
  @MinLength(4)
  password: string;
}