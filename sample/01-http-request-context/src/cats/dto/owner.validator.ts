import { Injectable } from '@nestjs/common';
import { Context } from '@2muchcoffee/nestjs-context';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

import { CatsService } from '../cats.service';
import { UpdateCatDto } from './update-cat.dto';

@Injectable()
@ValidatorConstraint({async: false})
export class OwnerValidator implements ValidatorConstraintInterface {
  constructor(private readonly catsService: CatsService) {
  }

  validate(text: string, args: ValidationArguments & { object: UpdateCatDto }) {
    const {user} = Context.getHttpReq<ExtendedRequest>();

    Context.getContext()
    Context.getHttpArgs()
    Context.getHttpReq()
    Context.getHttpRes()
    Context.getType()
    Context.isHttp()

    const cat = this.catsService.findById(args.object.id);
    return cat?.ownerId === user.id;
  }

  defaultMessage(args: ValidationArguments) {
    return '$property can be edited by the owner';
  }

}
