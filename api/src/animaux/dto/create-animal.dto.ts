import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min, MinLength } from 'class-validator';

export class CreateAnimalDto {
  @ApiProperty({ example: 'Simba', description: "Le nom de l'animal" })
  @IsString()
  @MinLength(2)
  nom: string;

  @ApiProperty({ example: 'Lion', description: "L'espèce de l'animal" })
  @IsString()
  espece: string;

  @ApiProperty({ example: 5, description: "L'âge de l'animal" })
  @IsInt()
  @Min(0)
  age: number;
}