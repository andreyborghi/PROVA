import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmesService } from './filmes.service';
export declare class FilmesController {
    private readonly filmesService;
    constructor(filmesService: FilmesService);
    create(data: CreateFilmeDto): Promise<import("./models/filme.model").Filme>;
    findByNome(nome?: string): Promise<import("./models/filme.model").Filme[]>;
    findById(id: number): Promise<import("./models/filme.model").Filme>;
    update(id: number, data: UpdateFilmeDto): Promise<import("./models/filme.model").Filme>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
