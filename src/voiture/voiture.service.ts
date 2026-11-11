import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoitureDto } from './dto/create-voiture.dto';
import { Voiture } from './entities/voiture.entity';

@Injectable()
export class VoitureService {
  // Stockage en mémoire (pas de base de données)
  private voitures: Voiture[] = [];
  private nextId = 1;

  // Ajouter une voiture
  ajouter(dto: CreateVoitureDto): Voiture {
    const voiture: Voiture = { id: this.nextId++, ...dto };
    this.voitures.push(voiture);
    return voiture;
  }

  // Récupérer toutes les voitures
  findAll(): Voiture[] {
    return this.voitures;
  }

  // Récupérer une voiture par id
  findById(id: number): Voiture {
    const voiture = this.voitures.find((v) => v.id === id);
    if (!voiture) {
      throw new NotFoundException(`Voiture avec id ${id} introuvable`);
    }
    return voiture;
  }
}
