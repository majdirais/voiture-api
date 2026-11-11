import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { VoitureModule } from './voiture/voiture.module';

@Module({
  imports: [
    // Charge les variables du fichier .env
    ConfigModule.forRoot({ isGlobal: true }),
    VoitureModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
