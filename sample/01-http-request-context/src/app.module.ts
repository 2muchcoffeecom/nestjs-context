import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ReqMo
    CatsModule
  ],
})
export class AppModule {}
