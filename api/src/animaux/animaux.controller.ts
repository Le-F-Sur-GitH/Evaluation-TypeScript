// api/src/animaux/animaux.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard, Roles } from '../auth/roles.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('animaux')
@Controller('animaux')
export class AnimauxController {
  constructor(private readonly animauxService: AnimauxService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel animal' })
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animauxService.create(createAnimalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les animaux' })
  findAll() {
    return this.animauxService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Récupérer un animal par ID (authentifié)' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.animauxService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un animal' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return this.animauxService.update(id, updateAnimalDto);
  }
  
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('gardien')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Supprimer un animal (rôle gardien requis)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.animauxService.remove(id);
  }

  @Get('soigner/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('veterinaire')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Soigner un animal (rôle vétérinaire requis)' })
  soignerAnimal(@Param('id', ParseIntPipe) id: number) {
    return this.animauxService.soigner(id);
  }
}