// api/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common'; // <-- Importer ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activation de la validation automatique pour tous les DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Zoo API')
    .setDescription("API pour la gestion du zoo")
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();