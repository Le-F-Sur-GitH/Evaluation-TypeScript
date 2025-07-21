import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateHabitatDto {
  @ApiProperty({ example: 'Savane' })
  @IsString()
  @MinLength(3)
  nom: string;

  @ApiProperty({ example: 'Chaud et sec' })
  @IsString()
  climat: string;
}