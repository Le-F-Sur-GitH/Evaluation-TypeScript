// api/src/animaux/animaux.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimauxService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = this.animalRepository.create(createAnimalDto);
    return this.animalRepository.save(animal);
  }

  findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  async findOne(id: number): Promise<Animal> {
    const animal = await this.animalRepository.findOneBy({ id });
    if (!animal) {
      throw new NotFoundException(`Animal avec l'ID #${id} non trouvé.`);
    }
    return animal;
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const animal = await this.animalRepository.preload({
      id: id,
      ...updateAnimalDto,
    });
    if (!animal) {
      throw new NotFoundException(`Animal avec l'ID #${id} non trouvé.`);
    }
    return this.animalRepository.save(animal);
  }

  async remove(id: number): Promise<void> {
    const result = await this.animalRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Animal avec l'ID #${id} non trouvé.`);
    }
  }

  async soigner(id: number): Promise<Animal> {
    const animal = await this.findOne(id);
    animal.health = 100;
    return this.animalRepository.save(animal);
  }
}