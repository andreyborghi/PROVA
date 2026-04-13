import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigurationService } from './sequelize.configuration.service';

@Module({
  imports: [ConfigModule],
  providers: [SequelizeConfigurationService],
  exports: [SequelizeConfigurationService],
})
export class SequelizeConfigurationModule {}
