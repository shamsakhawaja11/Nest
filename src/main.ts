/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ResponseInterceptor } from './common/Interceptors/response-interceptor';
import { AllExceptionFilters } from './common/Exception-Handling/exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type:VersioningType.URI
  });
  app.useGlobalInterceptors(
    new ResponseInterceptor()
  )
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true
    })
  )
  app.useGlobalFilters(new AllExceptionFilters)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
