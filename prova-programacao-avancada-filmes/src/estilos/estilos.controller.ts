import {
  Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query,
} from '@nestjs/common';
import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';
import { EstilosService } from './estilos.service';

@Controller('estilos')
export class EstilosController {
  constructor(private readonly estilosService: EstilosService) {}

  //Aqui é o 1 Create: inserção dos novos registros
  @Post()
  create(@Body() data: CreateEstiloDto) {
    return this.estilosService.create(data);
  }

  @Get()
  findByNome(@Query('nome') nome?: string) {
    return this.estilosService.findByNome(nome);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.estilosService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateEstiloDto,
  ) {
    return this.estilosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estilosService.remove(id);
  }
}
