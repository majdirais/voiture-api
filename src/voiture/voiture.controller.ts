import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVoitureDto } from './dto/create-voiture.dto';
import { Voiture } from './entities/voiture.entity';
import { VoitureService } from './voiture.service';

@ApiTags('voiture')
@Controller('voiture')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  // API 1 : Ajouter
  @Post()
  @ApiResponse({ status: 201, type: Voiture, description: 'Voiture ajoutée' })
  ajouter(@Body() dto: CreateVoitureDto): Voiture {
    return this.voitureService.ajouter(dto);
  }

  // API 2 : All
  @Get()
  @ApiResponse({ status: 200, type: [Voiture], description: 'Liste des voitures' })
  findAll(): Voiture[] {
    return this.voitureService.findAll();
  }

  // API 3 : By Id
  @Get(':id')
  @ApiResponse({ status: 200, type: Voiture, description: 'Voiture trouvée' })
  @ApiResponse({ status: 404, description: 'Voiture introuvable' })
  findById(@Param('id', ParseIntPipe) id: number): Voiture {
    return this.voitureService.findById(id);
  }
}
