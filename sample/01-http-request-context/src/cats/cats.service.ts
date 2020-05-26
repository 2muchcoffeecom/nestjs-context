import { Injectable } from '@nestjs/common';

import { Cat } from './interfaces/cat.interface';
import { PaginationCatDto } from './dto/pagination-cat.dto';
import { cats } from './cats';


@Injectable()
export class CatsService {
  private readonly cats: Cat[] = cats;

  find({page, limit}: PaginationCatDto): Cat[] {
    return this.cats.slice((page - 1) * limit, page * limit)
  }
}
