import { DynamicModule, Inject, Module, Provider } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { TestController } from './test.controller';
import { UsersService } from './users/users.service';

@Module({
  controllers: [HelloController, TestController],
  providers: [HelloService, UsersService],
})
export class HelloModule {
  constructor(@Inject('META') private readonly meta) {}

  static forRoot(meta: Provider): DynamicModule {
    return {
      module: HelloModule,
      providers: [meta],
    };
  }
}
