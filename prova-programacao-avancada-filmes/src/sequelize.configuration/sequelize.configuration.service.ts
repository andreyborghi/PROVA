import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { Estilo } from '../estilos/models/estilo.model';
import { Filme } from '../filmes/models/filme.model';

@Injectable()
export class SequelizeConfigurationService
  implements SequelizeOptionsFactory
{
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mysql',
      host: this.configService.get<string>('DB_HOST'),
      port: Number(this.configService.get<string>('DB_PORT')),
      username: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASS'),
      database: this.configService.get<string>('DB_NAME'),
      synchronize: true,
      autoLoadModels: true,
      models: [Estilo, Filme],
    };
  }
}
