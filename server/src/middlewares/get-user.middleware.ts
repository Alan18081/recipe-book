import {Injectable, NestMiddleware, MiddlewareFunction} from '@nestjs/common';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {
  resolve(): MiddlewareFunction {
    return (req, res, next) => {
      console.log(req.headers);
      next();
    }
  }
}