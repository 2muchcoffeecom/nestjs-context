import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { NestjsContextInterceptor } from './nestjs-context.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: NestjsContextInterceptor,
    },
  ],
})
export class NestjsContextModule {
}
