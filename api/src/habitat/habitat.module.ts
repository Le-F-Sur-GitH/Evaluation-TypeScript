import { Module } from '@nestjs/common';
import { HabitatService } from './habitat.service';
import { HabitatController } from './habitat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habitat } from './entities/habitat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habitat])],
  controllers: [HabitatController],
  providers: [HabitatService],
})
export class HabitatModule {}