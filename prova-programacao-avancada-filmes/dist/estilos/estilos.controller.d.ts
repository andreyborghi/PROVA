import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';
import { EstilosService } from './estilos.service';
export declare class EstilosController {
    private readonly estilosService;
    constructor(estilosService: EstilosService);
    create(data: CreateEstiloDto): Promise<import("./models/estilo.model").Estilo>;
    findByNome(nome?: string): Promise<import("./models/estilo.model").Estilo[]>;
    findById(id: number): Promise<import("./models/estilo.model").Estilo>;
    update(id: number, data: UpdateEstiloDto): Promise<import("./models/estilo.model").Estilo>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
