import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation automatique des DTO
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // ---- Swagger ----
  const config = new DocumentBuilder()
    .setTitle('API Voiture')
    .setDescription('Documentation de l\'API du module Voiture')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // ---- Port depuis le .env ----
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Serveur lancé sur http://localhost:${port}`);
  console.log(`Swagger disponible sur http://localhost:${port}/api`);
}
bootstrap();
