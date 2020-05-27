import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  useContainer(app.select(AppModule), {
    fallback: true,
    fallbackOnErrors: true
  });

  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription(`The cats API`)
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/graphql`);
}
bootstrap();
