import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './models/filme.model';
export declare class FilmesService {
    private readonly filmeModel;
    constructor(filmeModel: typeof Filme);
    create(data: CreateFilmeDto): Promise<Filme>;
    findById(id: number): Promise<Filme>;
    findByNome(nome?: string): Promise<Filme[]>;
    update(id: number, data: UpdateFilmeDto): Promise<Filme>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
