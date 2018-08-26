import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import { AuthService } from './auth.service';
import {UnauthorizedException, Injectable} from '@nestjs/common';
import {JWT_SECRET} from '../config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET
    })
  }

  async validate(payload, done) {
    const user = await this.authService.validateUser(payload);
    if(!user) {
      return done(new UnauthorizedException(), false);
    }
    return done(null, user);
  }
}