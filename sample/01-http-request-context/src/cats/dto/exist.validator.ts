import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

import { CatsService } from '../cats.service';
import { UpdateCatDto } from './update-cat.dto';

@Injectable()
@ValidatorConstraint({async: true})
export class ExistValidator implements ValidatorConstraintInterface {
  constructor(private readonly catsService: CatsService) {
  }

  async validate(id: number, args: ValidationArguments & { object: UpdateCatDto }) {
    return !!this.catsService.findById(id);
  }

  defaultMessage(args: ValidationArguments) {
    return 'cat with this identifier does not exist';
  }

}
