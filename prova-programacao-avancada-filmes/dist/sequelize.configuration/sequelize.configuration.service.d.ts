import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
export declare class SequelizeConfigurationService implements SequelizeOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createSequelizeOptions(): SequelizeModuleOptions;
}
