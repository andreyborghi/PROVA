import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { EstilosModule } from './estilos/estilos.module';
import { FilmesModule } from './filmes/filmes.module';
import { SequelizeConfigurationModule } from './sequelize.configuration/sequelize.configuration.module';
import { SequelizeConfigurationService } from './sequelize.configuration/sequelize.configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeConfigurationModule,
    SequelizeModule.forRootAsync({
      imports: [SequelizeConfigurationModule],
      useClass: SequelizeConfigurationService,
    }),
    EstilosModule,
    FilmesModule,
  ],
})
export class AppModule {}
