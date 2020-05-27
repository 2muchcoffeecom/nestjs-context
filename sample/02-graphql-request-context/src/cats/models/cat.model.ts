import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Cat' })
export class Cat {
  @Field()
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly age: number;

  @Field()
  readonly breed: string;

  @Field()
  readonly ownerId: number;
}
