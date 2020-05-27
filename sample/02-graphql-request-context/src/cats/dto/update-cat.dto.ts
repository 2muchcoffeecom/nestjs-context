import { IsInt, IsOptional, IsString, Min, Validate } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

import { OwnerValidator } from './owner.validator';
import { ExistValidator } from './exist.validator';

@InputType()
export class UpdateCatDto {
  @Field()
  @IsInt()
  @Validate(ExistValidator)
  readonly id: number;

  @Field({nullable: true})
  @IsString()
  @IsOptional()
  @Validate(OwnerValidator)
  readonly name?: string;

  @Field({nullable: true})
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly age?: number;

  @Field({nullable: true})
  @IsString()
  @IsOptional()
  readonly breed?: string;
}
