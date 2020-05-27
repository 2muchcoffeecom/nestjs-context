import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat.dto';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Patch()
  async update(@Body() data: UpdateCatDto) {
    return this.catsService.update(data);
  }

  @Get()
  async find(): Promise<Cat[]> {
    return this.catsService.find();
  }
}
