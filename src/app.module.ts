import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    // Charge les variables du fichier .env
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
})
export class AppModule {}
