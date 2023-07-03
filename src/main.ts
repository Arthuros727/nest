import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets(join(__dirname, '..', 'public')); // if you want some js/css, give directory here
  app.setBaseViewsDir(join(__dirname, '../src/', 'view')); // view path
  app.setViewEngine('hbs'); // template engine you wanna use 
  await app.listen(3000);
}
bootstrap();

