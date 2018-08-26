import * as jwt from 'jsonwebtoken';
import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JWT_EXPIRES_IN, JWT_SECRET} from '../config';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async createToken(email: string, id: number) {
    const token = jwt.sign({ email, id }, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
    return {
      expiresIn: JWT_EXPIRES_IN,
      token
    }
  }

  async validateUser(payload): Promise<any> {
    return this.usersService.findOneById(payload.id);
  }
}