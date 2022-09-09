import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //use the pipes to validation the endpoint data
  app.useGlobalPipes(new ValidationPipe());
  app.migration
  await app.listen(3000);
}
bootstrap();
