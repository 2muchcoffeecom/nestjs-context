import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { RequestContext } from '@2muchcoffee/nestjs-context';


export class GqlRequestContext extends RequestContext {
  static GqlExecutionContext() {
    const context = GqlRequestContext.getContext();

    if(GqlRequestContext.isGraphql()){
      return GqlExecutionContext.create(context);
    }
    return null;
  }

  static getGqlArgs<T extends object>() {
    if(GqlRequestContext.isGraphql()){
      return GqlRequestContext.GqlExecutionContext().getArgs<T>();
    }
    return null;
  }

  static getGqlRoot<T = any>() {
    if(GqlRequestContext.isGraphql()){
      return GqlRequestContext.GqlExecutionContext().getRoot<T>();
    }
    return null;
  }

  static getGqlContext<T = any>() {
    if(GqlRequestContext.isGraphql()){
      return GqlRequestContext.GqlExecutionContext().getContext<T>();
    }
    return null;
  }

  static getGqlInfo<T = GraphQLResolveInfo>() {
    if(GqlRequestContext.isGraphql()){
      return GqlRequestContext.GqlExecutionContext().getInfo<T>();
    }
    return null;
  }
}

