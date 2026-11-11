import { ApiProperty } from '@nestjs/swagger';

export class Voiture {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Golf 7' })
  nom: string;

  @ApiProperty({ example: 'Noir' })
  couleur: string;

  @ApiProperty({ example: 7, description: 'Nombre de chevaux' })
  nbrChevaux: number;
}
