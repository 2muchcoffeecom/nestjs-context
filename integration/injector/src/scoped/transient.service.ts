import { Injectable, Scope } from '@nestjs/common';
import { Transient2Service } from './transient2.service';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {
  constructor(public readonly svc: Transient2Service) {}
}
