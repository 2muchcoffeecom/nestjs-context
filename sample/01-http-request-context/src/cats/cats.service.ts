import { Injectable } from '@nestjs/common';

import { Cat } from './interfaces/cat.interface';
import { cats } from './cats';


@Injectable()
export class CatsService {
  private readonly cats: Cat[] = cats;

  find(): Cat[] {
    return this.cats;
  }

  findById(id: number) {
    return this.cats.find((cat) => cat.id === id)
  }

  update({id, ...data}: Partial<Cat>){
    const index = this.cats.findIndex(cat => cat.id === id);
    this.cats[index] = {
      ...this.cats[index],
      ...data
    };

    return this.cats[index];
  }
}
