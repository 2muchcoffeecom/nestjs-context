import { Injectable } from '@nestjs/common';
import { GqlContext } from '@2muchcoffee/nestjs-gql-context';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

import { CatsService } from '../cats.service';
import { UpdateCatDto } from './update-cat.dto';

@Injectable()
@ValidatorConstraint({async: false})
export class OwnerValidator implements ValidatorConstraintInterface {
  constructor(private readonly catsService: CatsService) {
  }

  validate(text: string, args: ValidationArguments & { object: UpdateCatDto }) {
    const {req} = GqlContext.getGqlContext<{req: ExtendedRequest}>();

    GqlContext

    const cat = this.catsService.findById(args.object.id);
    return cat?.ownerId === req?.user?.id;
  }

  defaultMessage(args: ValidationArguments) {
    return '$property can be edited by the owner';
  }

}
