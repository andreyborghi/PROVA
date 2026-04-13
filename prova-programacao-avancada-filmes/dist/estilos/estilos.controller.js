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
exports.EstilosController = void 0;
const common_1 = require("@nestjs/common");
const create_estilo_dto_1 = require("./dto/create-estilo.dto");
const update_estilo_dto_1 = require("./dto/update-estilo.dto");
const estilos_service_1 = require("./estilos.service");
let EstilosController = class EstilosController {
    estilosService;
    constructor(estilosService) {
        this.estilosService = estilosService;
    }
    create(data) {
        return this.estilosService.create(data);
    }
    findByNome(nome) {
        return this.estilosService.findByNome(nome);
    }
    findById(id) {
        return this.estilosService.findById(id);
    }
    update(id, data) {
        return this.estilosService.update(id, data);
    }
    remove(id) {
        return this.estilosService.remove(id);
    }
};
exports.EstilosController = EstilosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estilo_dto_1.CreateEstiloDto]),
    __metadata("design:returntype", void 0)
], EstilosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstilosController.prototype, "findByNome", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstilosController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estilo_dto_1.UpdateEstiloDto]),
    __metadata("design:returntype", void 0)
], EstilosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstilosController.prototype, "remove", null);
exports.EstilosController = EstilosController = __decorate([
    (0, common_1.Controller)('estilos'),
    __metadata("design:paramtypes", [estilos_service_1.EstilosService])
], EstilosController);
//# sourceMappingURL=estilos.controller.js.map