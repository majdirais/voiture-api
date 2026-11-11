import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateVoitureDto {
  @ApiProperty({ example: 'Golf 7' })
  @IsString()
  @IsNotEmpty()
  nom: string;

  @ApiProperty({ example: 'Noir' })
  @IsString()
  @IsNotEmpty()
  couleur: string;

  @ApiProperty({ example: 7, description: 'Nombre de chevaux' })
  @IsInt()
  @Min(1)
  nbrChevaux: number;
}
