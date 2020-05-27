import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ContextModule } from '@2muchcoffee/nestjs-context';

import { CatsModule } from './cats/cats.module';
import { AuthMiddleware } from './core/middlewares/auth.middleware';

@Module({
  imports: [
    ContextModule,
    CatsModule,
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
