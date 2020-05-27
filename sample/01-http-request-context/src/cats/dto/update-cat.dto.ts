import { IsInt, IsOptional, IsString, Min, Validate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { OwnerValidator } from './owner.validator';
import { ExistValidator } from './exist.validator';

export class UpdateCatDto {
  @ApiProperty()
  @IsInt()
  @Validate(ExistValidator)
  readonly id: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Validate(OwnerValidator)
  readonly name?: string;

  @ApiPropertyOptional()
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly age?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly breed?: string;
}
