import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';
import { Estilo } from './models/estilo.model';
export declare class EstilosService {
    private readonly estiloModel;
    constructor(estiloModel: typeof Estilo);
    create(data: CreateEstiloDto): Promise<Estilo>;
    findById(id: number): Promise<Estilo>;
    findByNome(nome?: string): Promise<Estilo[]>;
    update(id: number, data: UpdateEstiloDto): Promise<Estilo>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
