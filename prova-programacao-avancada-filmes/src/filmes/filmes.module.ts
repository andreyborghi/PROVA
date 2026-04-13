import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { Filme } from './models/filme.model';
import { Estilo } from '../estilos/models/estilo.model';

@Module({
  imports: [SequelizeModule.forFeature([Filme, Estilo])],
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
