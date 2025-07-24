import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200', // URL de notre futur frontend Angular
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Zoo API')
    .setDescription('API pour la gestion du zoo')
    .setVersion('1.0')
    .addBearerAuth() // Ajoute la sécurité JWT à Swagger
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();