import { Module } from '@nestjs/common';
import { VoitureController } from './voiture.controller';
import { VoitureService } from './voiture.service';

@Module({
  controllers: [VoitureController],
  providers: [VoitureService],
})
export class VoitureModule {}
