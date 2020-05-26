import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CatsService } from './cats.service';
import { PaginationCatDto } from './dto/pagination-cat.dto';
import { Cat } from './interfaces/cat.interface';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async find(
    @Query() createCatDto: PaginationCatDto
  ): Promise<Cat[]> {
    return this.catsService.find(createCatDto);
  }
}
