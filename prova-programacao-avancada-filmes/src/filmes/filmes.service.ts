import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './models/filme.model';
import { Estilo } from '../estilos/models/estilo.model';

@Injectable()
export class FilmesService {
  constructor(
    @InjectModel(Filme)
    private readonly filmeModel: typeof Filme,
  ) {}

  async create(data: CreateFilmeDto): Promise<Filme> {
    return this.filmeModel.create({ ...data });
  }

  async findById(id: number): Promise<Filme> {
    const filme = await this.filmeModel.findByPk(id, {
      include: [Estilo],
    });

    if (!filme) {
      throw new NotFoundException('Filme não encontrado');
    }

    return filme;
  }

  async findByNome(nome?: string): Promise<Filme[]> {
    if (!nome) {
      return this.filmeModel.findAll({
        include: [Estilo],
      });
    }

    return this.filmeModel.findAll({
      where: {
        nome: {
          [Op.like]: `%${nome}%`,
        },
      },
      include: [Estilo],
    });
  }

  async update(id: number, data: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.findById(id);
    await filme.update({ ...data });
    return filme;
  }

  async remove(id: number): Promise<{ message: string }> {
    const filme = await this.findById(id);
    await filme.destroy();

    return { message: 'Filme removido com sucesso' };
  }
}
