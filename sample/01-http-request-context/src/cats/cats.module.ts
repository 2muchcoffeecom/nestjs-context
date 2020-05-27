import { Module } from '@nestjs/common';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { OwnerValidator } from './dto/owner.validator';
import { ExistValidator } from './dto/exist.validator';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    OwnerValidator,
    ExistValidator,
  ],
})
export class CatsModule {}
