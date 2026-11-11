import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ---- Swagger ----
  const config = new DocumentBuilder()
    .setTitle('API Voiture')
    .setDescription('Documentation de l\'API du module Voiture')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Serveur lancé sur http://localhost:3000');
  console.log('Swagger disponible sur http://localhost:3000/api');
}
bootstrap();
