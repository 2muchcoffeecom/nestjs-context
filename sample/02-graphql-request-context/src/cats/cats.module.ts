import { Module } from '@nestjs/common';

import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { OwnerValidator } from './dto/owner.validator';
import { ExistValidator } from './dto/exist.validator';

@Module({
  providers: [
    CatsResolver,
    CatsService,
    OwnerValidator,
    ExistValidator,
  ],
})
export class CatsModule {}
