import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '@2muchcoffee/nestjs-context';


export class GqlContext extends Context {
  static getExecutionContext() {
    const context = GqlContext.getContext();

    if(GqlContext.isGraphql()){
      return GqlExecutionContext.create(context);
    }
    return null;
  }

  static getGqlArgs<T extends object>() {
    if(GqlContext.isGraphql()){
      return GqlContext.getExecutionContext().getArgs<T>();
    }
    return null;
  }

  static getGqlRoot<T = any>() {
    if(GqlContext.isGraphql()){
      return GqlContext.getExecutionContext().getRoot<T>();
    }
    return null;
  }

  static getGqlContext<T = any>() {
    if(GqlContext.isGraphql()){
      return GqlContext.getExecutionContext().getContext<T>();
    }
    return null;
  }

  static getGqlInfo<T = GraphQLResolveInfo>() {
    if(GqlContext.isGraphql()){
      return GqlContext.getExecutionContext().getInfo<T>();
    }
    return null;
  }

  static isHttp() {
    return Context.getType() === 'http';
  }
}

