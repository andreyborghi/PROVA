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
exports.Estilo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const filme_model_1 = require("../../filmes/models/filme.model");
let Estilo = class Estilo extends sequelize_typescript_1.Model {
};
exports.Estilo = Estilo;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TINYINT,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Estilo.prototype, "estilo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.CHAR(15),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Estilo.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => filme_model_1.Filme),
    __metadata("design:type", Array)
], Estilo.prototype, "filmes", void 0);
exports.Estilo = Estilo = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'estilos',
        timestamps: false,
    })
], Estilo);
//# sourceMappingURL=estilo.model.js.map