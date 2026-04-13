import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';
import { Estilo } from './models/estilo.model';

@Injectable()
export class EstilosService {
  constructor(
    @InjectModel(Estilo)
    private readonly estiloModel: typeof Estilo,
  ) {}

  async create(data: CreateEstiloDto): Promise<Estilo> {
    return this.estiloModel.create({ ...data });
  }

  async findById(id: number): Promise<Estilo> {
    const estilo = await this.estiloModel.findByPk(id);

    if (!estilo) {
      throw new NotFoundException('Estilo não encontrado');
    }

    return estilo;
  }

  async findByNome(nome?: string): Promise<Estilo[]> {
    if (!nome) {
      return this.estiloModel.findAll();
    }

    return this.estiloModel.findAll({
      where: {
        nome: {
          [Op.like]: `%${nome}%`,
        },
      },
    });
  }

  async update(id: number, data: UpdateEstiloDto): Promise<Estilo> {
    const estilo = await this.findById(id);
    await estilo.update({ ...data });
    return estilo;
  }

  async remove(id: number): Promise<{ message: string }> {
    const estilo = await this.findById(id);
    await estilo.destroy();

    return { message: 'Estilo removido com sucesso' };
  }
}
