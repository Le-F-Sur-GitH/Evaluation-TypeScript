import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Habitat {
  @ApiProperty({ description: "L'ID unique de l'habitat" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Savane', description: "Le nom de l'habitat" })
  @Column({ unique: true })
  nom: string;

  @ApiProperty({ example: 'Chaud et sec', description: 'Le type de climat' })
  @Column()
  climat: string;
}