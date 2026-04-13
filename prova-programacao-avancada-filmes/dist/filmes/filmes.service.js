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
exports.FilmesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const filme_model_1 = require("./models/filme.model");
const estilo_model_1 = require("../estilos/models/estilo.model");
let FilmesService = class FilmesService {
    filmeModel;
    constructor(filmeModel) {
        this.filmeModel = filmeModel;
    }
    async create(data) {
        return this.filmeModel.create({ ...data });
    }
    async findById(id) {
        const filme = await this.filmeModel.findByPk(id, {
            include: [estilo_model_1.Estilo],
        });
        if (!filme) {
            throw new common_1.NotFoundException('Filme não encontrado');
        }
        return filme;
    }
    async findByNome(nome) {
        if (!nome) {
            return this.filmeModel.findAll({
                include: [estilo_model_1.Estilo],
            });
        }
        return this.filmeModel.findAll({
            where: {
                nome: {
                    [sequelize_2.Op.like]: `%${nome}%`,
                },
            },
            include: [estilo_model_1.Estilo],
        });
    }
    async update(id, data) {
        const filme = await this.findById(id);
        await filme.update({ ...data });
        return filme;
    }
    async remove(id) {
        const filme = await this.findById(id);
        await filme.destroy();
        return { message: 'Filme removido com sucesso' };
    }
};
exports.FilmesService = FilmesService;
exports.FilmesService = FilmesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(filme_model_1.Filme)),
    __metadata("design:paramtypes", [Object])
], FilmesService);
//# sourceMappingURL=filmes.service.js.map