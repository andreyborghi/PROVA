import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmesService } from './filmes.service';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create(@Body() data: CreateFilmeDto) {
    return this.filmesService.create(data);
  }

  @Get()
  findByNome(@Query('nome') nome?: string) {
    return this.filmesService.findByNome(nome);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateFilmeDto,
  ) {
    return this.filmesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.remove(id);
  }
}
