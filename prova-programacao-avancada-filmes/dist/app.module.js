"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const estilos_module_1 = require("./estilos/estilos.module");
const filmes_module_1 = require("./filmes/filmes.module");
const sequelize_configuration_module_1 = require("./sequelize.configuration/sequelize.configuration.module");
const sequelize_configuration_service_1 = require("./sequelize.configuration/sequelize.configuration.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_configuration_module_1.SequelizeConfigurationModule,
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [sequelize_configuration_module_1.SequelizeConfigurationModule],
                useClass: sequelize_configuration_service_1.SequelizeConfigurationService,
            }),
            estilos_module_1.EstilosModule,
            filmes_module_1.FilmesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map