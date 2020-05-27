# @2muchcoffee/nestjs-context

Allows you to get the request context outside of the NestJs request scope

## Installation

```
npm install @2muchcoffee/nestjs-context --save
```

## Usage
Import `ContextModule` to `AppModule` or `CoreModule` for once
```typescript
import { ContextModule } from '@2muchcoffee/nestjs-context';
@Module({
  imports: [
    ...
    ContextModule,
    ...
  ]
})
export class AppModule {
}
```

After `ContextModule` import you can use `Context` and its static functions in your code
 
```typescript
import { Context } from '@2muchcoffee/nestjs-context';
const {user} = Context.getHttpReq<Request>();
```

> Note: In most cases author uses @2muchcoffee/nestjs-context to get context in custom validators.
See [samples](#samples) for more details.

# GraphQl
You should install `@2muchcoffee/nestjs-gql-context` in order to get the correct context on the framework usage

```
npm install @2muchcoffee/nestjs-gql-context --save
```

If you want the graphql context, you can get it using `GqlContext` instead of `Context`
```typescript
import { GqlContext } from '@2muchcoffee/nestjs-gql-context';
GqlContext.getGqlContext<{req: Request}>()
```

## Static Methods

| Method                                          | Description                                                                                                                      |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Context**                                     | import { Context } from '@2muchcoffee/nestjs-context'                                                                            |
| `getContext`                                    | Returns the current request pipeline                                                                                             |
| `getHttpArgs`                                   | Returns an array of arguments being passed to the handler                                                                        |
| `getHttpReq`                                    | Returns a request object                                                                                                         |
| `getHttpRes`                                    | Returns a response object                                                                                                        |
| `getType`                                       | Returns the current execution context type (string)                                                                              |
| `isHttp`                                        | Returns true if the current execution context type is http                                                                       |
| `isGraphql`                                     | Returns true if the current execution context type is graphql                                                                    |
| **GqlContext**                                  | import { GqlContext } from '@2muchcoffee/nestjs-gql-context'; <br> `Context` extends from `GqlContext` and has the same methods  |
| `getExecutionContext`                           | Returns the current gql execution context                                                                                        |
| `getGqlRoot`                                    | The previous object sent from the previous Query type                                                                            |
| `getGqlArgs`                                    | Arguments provided in the GraphQL query                                                                                          |
| `getGqlContext`                                 | A value which is provided to every resolver and holds important contextual information                                           |
| `getGqlInfo`                                    | A value which holds field-specific information relevant to the current query                                                     |


# Samples
Take a look at samples in [./sample](https://github.com/2muchcoffeecom/nestjs-context/tree/master/sample) for usage examples.
