import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
  ) {}

  use(req: ExtendedRequest, res: Response, next: Function) {
    req.user = {
      id: 1,
      name: 'John',
      role: 'admin',
    };
    next();
  }
}
