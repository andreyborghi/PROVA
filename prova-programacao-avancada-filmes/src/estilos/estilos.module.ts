import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EstilosController } from './estilos.controller';
import { EstilosService } from './estilos.service';
import { Estilo } from './models/estilo.model';

@Module({
  imports: [SequelizeModule.forFeature([Estilo])],
  controllers: [EstilosController],
  providers: [EstilosService],
})
export class EstilosModule {}
