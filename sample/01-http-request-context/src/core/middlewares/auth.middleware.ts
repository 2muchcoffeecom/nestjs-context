import { Injectable, NestMiddleware } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { AuthService } from '../../auth/auth.service';
import { User } from '../../user/models/user.model';
import { UserService } from '../../user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async use(req, res, next) {
    const token = this.authService.getToken(req.headers.authorization);
    if (!token) {
      return next();
    }

    const isVerified = await this.authService.verifyToken(token);
    if (!isVerified) {
      return next();
    }

    const user = await this.userService.findOne({
      token,
    });
    if (!user) {
      return next();
    }

    req.user = plainToClass(User, user.toObject());
    next();
  }
}
