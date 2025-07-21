import { ApiProperty } from '@nestjs/swagger';

export class AnimalDto {
  @ApiProperty({ description: "L'identifiant unique de l'animal", example: 1 })
  id: number;

  @ApiProperty({ description: "Le nom de l'animal", example: 'Simba' })
  nom: string;

  @ApiProperty({ description: "L'espèce de l'animal", example: 'Lion' })
  espece: string;

  @ApiProperty({ description: "L'âge de l'animal", example: 5 })
  age: number;
}