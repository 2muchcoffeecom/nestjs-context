import { ContextType, ExecutionContext } from '@nestjs/common';
import * as cls from 'cls-hooked';

export class RequestContext {
  static getContext(): ExecutionContext | null {
    const session = cls.getNamespace('contextStore');
    if (session && session.active) {
      return session.get('context');
    }
    return null;
  }

  static getHttpArgs<T extends any[]>() {
    if(RequestContext.isHttp()){
      return RequestContext.getContext().getArgs<T>();
    }
    return null;
  }

  static getHttpReq<T extends any[]>() {
    if(RequestContext.isHttp()){
      const [req] =  RequestContext.getHttpArgs<T>();
      return req;
    }
    return null;
  }

  static getHttpRes<T extends any[]>() {
    if(RequestContext.isHttp()){
      const [,res] =  RequestContext.getHttpArgs<T>();
      return res;
    }
    return null;
  }

  static getType<T extends 'graphql' | ContextType>() {
    return RequestContext.getContext().getType<'graphql' | ContextType>();
  }

  static isGraphql() {
    return RequestContext.getType() === 'graphql';
  }

  static isHttp() {
    return RequestContext.getType() === 'http';
  }
}
