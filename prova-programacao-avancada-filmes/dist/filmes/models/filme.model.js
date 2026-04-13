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
exports.Filme = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const estilo_model_1 = require("../../estilos/models/estilo.model");
let Filme = class Filme extends sequelize_typescript_1.Model {
};
exports.Filme = Filme;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Filme.prototype, "filme", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => estilo_model_1.Estilo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TINYINT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Filme.prototype, "estilo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.CHAR(30),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Filme.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.CHAR(4),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Filme.prototype, "ano", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.CHAR(3),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Filme.prototype, "duracao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.CHAR(45),
        allowNull: true,
    }),
    __metadata("design:type", String)
], Filme.prototype, "foto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT('long'),
        allowNull: true,
    }),
    __metadata("design:type", String)
], Filme.prototype, "sinopse", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.CHAR(45),
        allowNull: true,
    }),
    __metadata("design:type", String)
], Filme.prototype, "video", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => estilo_model_1.Estilo),
    __metadata("design:type", estilo_model_1.Estilo)
], Filme.prototype, "dadosEstilo", void 0);
exports.Filme = Filme = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'filmes',
        timestamps: false,
    })
], Filme);
//# sourceMappingURL=filme.model.js.map