import * as cls from 'cls-hooked';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
    const session = cls.getNamespace('contextStore') || cls.createNamespace('contextStore');

    return new Promise(async (resolve, reject) => {
      await session.run(async () => {
        session.set('context', context);
        const result = await next.handle().toPromise()
        .catch(reject);
        resolve(result);
      });
    });
  }
}
