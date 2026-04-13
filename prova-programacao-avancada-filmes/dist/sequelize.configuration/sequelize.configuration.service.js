"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const estilo_model_1 = require("../estilos/models/estilo.model");
const filme_model_1 = require("../filmes/models/filme.model");
let SequelizeConfigurationService = class SequelizeConfigurationService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    createSequelizeOptions() {
        return {
            dialect: 'mysql',
            host: this.configService.get('DB_HOST'),
            port: Number(this.configService.get('DB_PORT')),
            username: this.configService.get('DB_USER'),
            password: this.configService.get('DB_PASS'),
            database: this.configService.get('DB_NAME'),
            synchronize: true,
            autoLoadModels: true,
            models: [estilo_model_1.Estilo, filme_model_1.Filme],
        };
    }
};
exports.SequelizeConfigurationService = SequelizeConfigurationService;
exports.SequelizeConfigurationService = SequelizeConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SequelizeConfigurationService);
//# sourceMappingURL=sequelize.configuration.service.js.map