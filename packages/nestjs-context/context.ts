import { ContextType, ExecutionContext } from '@nestjs/common';
import * as cls from 'cls-hooked';

export class Context {
  static getContext(): ExecutionContext | null {
    const session = cls.getNamespace('contextStore');
    if (session && session.active) {
      return session.get('context');
    }
    return null;
  }

  static getHttpArgs<T extends any[]>() {
    if(Context.isHttp()){
      return Context.getContext().getArgs<T>();
    }
    return null;
  }

  static getHttpReq<T extends any>() {
    if(Context.isHttp()){
      const [req] =  Context.getHttpArgs<T[]>();
      return req;
    }
    return null;
  }

  static getHttpRes<T extends any>() {
    if(Context.isHttp()){
      const [,res] =  Context.getHttpArgs<T[]>();
      return res;
    }
    return null;
  }

  static getType<T extends 'graphql' | ContextType>() {
    return Context.getContext().getType<'graphql' | ContextType>();
  }

  static isGraphql() {
    return Context.getType() === 'graphql';
  }

  static isHttp() {
    return Context.getType() === 'http';
  }
}
