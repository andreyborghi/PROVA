"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstiloDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estilo_dto_1 = require("./create-estilo.dto");
class UpdateEstiloDto extends (0, mapped_types_1.PartialType)(create_estilo_dto_1.CreateEstiloDto) {
}
exports.UpdateEstiloDto = UpdateEstiloDto;
//# sourceMappingURL=update-estilo.dto.js.map