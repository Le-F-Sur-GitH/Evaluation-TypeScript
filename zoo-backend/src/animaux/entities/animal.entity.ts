// api/src/animaux/entities/animal.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  nom: string;

  @ApiProperty()
  @Column()
  espece: string;

  @ApiProperty()
  @Column()
  age: number;

  @ApiProperty({ description: 'Niveau de santé de 0 à 100', default: 100 })
  @Column({ default: 100 })
  health: number;
}