import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CatsService } from './cats.service';
import { Cat } from './models/cat.model';
import { UpdateCatDto } from './dto/update-cat.dto';

@Resolver(of => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [Cat])
  async find() {
    return this.catsService.find();
  }

  @Mutation(() => Cat)
  async update(@Args('input') input: UpdateCatDto) {
    return this.catsService.update(input);
  }
}
