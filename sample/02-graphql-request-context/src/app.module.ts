import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ContextModule } from '@2muchcoffee/nestjs-context';
import { GraphQLModule } from '@nestjs/graphql';

import { CatsModule } from './cats/cats.module';
import { AuthMiddleware } from './core/middlewares/auth.middleware';
import { findQuery, invalidUpdateQuery, validUpdateQuery } from '../gql.queries';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => {
        return {
          autoSchemaFile: 'schema.gql',
          introspection: true,
          playground: {
            tabs: [
              {
                name: 'Find All Cats',
                endpoint: 'http://localhost:3000/graphql',
                query: findQuery
              },
              {
                name: 'Valid Cat Update',
                endpoint: 'http://localhost:3000/graphql',
                query: validUpdateQuery
              },
              {
                name: 'Invalid Cat Update',
                endpoint: 'http://localhost:3000/graphql',
                query: invalidUpdateQuery
              },
            ],
          },
        };
      }
    }),
    ContextModule,
    CatsModule,
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
