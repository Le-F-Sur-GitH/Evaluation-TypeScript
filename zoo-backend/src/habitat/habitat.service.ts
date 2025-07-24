import { Injectable } from '@nestjs/common';
import { CreateHabitatDto } from './dto/create-habitat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Habitat } from './entities/habitat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HabitatService {
  constructor(
    @InjectRepository(Habitat)
    private habitatRepository: Repository<Habitat>,
  ) {}

  create(createHabitatDto: CreateHabitatDto) {
    return this.habitatRepository.save(createHabitatDto);
  }

  findAll() {
    return this.habitatRepository.find();
  }

  findOne(id: number) {
    return this.habitatRepository.findOneBy({ id });
  }
}