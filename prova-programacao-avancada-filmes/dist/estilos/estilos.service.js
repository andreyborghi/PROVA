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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstilosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const estilo_model_1 = require("./models/estilo.model");
let EstilosService = class EstilosService {
    estiloModel;
    constructor(estiloModel) {
        this.estiloModel = estiloModel;
    }
    async create(data) {
        return this.estiloModel.create({ ...data });
    }
    async findById(id) {
        const estilo = await this.estiloModel.findByPk(id);
        if (!estilo) {
            throw new common_1.NotFoundException('Estilo não encontrado');
        }
        return estilo;
    }
    async findByNome(nome) {
        if (!nome) {
            return this.estiloModel.findAll();
        }
        return this.estiloModel.findAll({
            where: {
                nome: {
                    [sequelize_2.Op.like]: `%${nome}%`,
                },
            },
        });
    }
    async update(id, data) {
        const estilo = await this.findById(id);
        await estilo.update({ ...data });
        return estilo;
    }
    async remove(id) {
        const estilo = await this.findById(id);
        await estilo.destroy();
        return { message: 'Estilo removido com sucesso' };
    }
};
exports.EstilosService = EstilosService;
exports.EstilosService = EstilosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(estilo_model_1.Estilo)),
    __metadata("design:paramtypes", [Object])
], EstilosService);
//# sourceMappingURL=estilos.service.js.map