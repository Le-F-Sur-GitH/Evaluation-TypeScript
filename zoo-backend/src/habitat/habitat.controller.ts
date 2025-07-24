import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { HabitatService } from './habitat.service';
import { CreateHabitatDto } from './dto/create-habitat.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('habitats')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('habitat')
export class HabitatController {
  constructor(private readonly habitatService: HabitatService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel habitat' })
  create(@Body() createHabitatDto: CreateHabitatDto) {
    return this.habitatService.create(createHabitatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les habitats' })
  findAll() {
    return this.habitatService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Trouver un habitat par son ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.habitatService.findOne(id);
  }
}