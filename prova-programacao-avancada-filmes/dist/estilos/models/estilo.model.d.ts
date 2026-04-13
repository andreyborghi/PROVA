import { Model } from 'sequelize-typescript';
import { Filme } from '../../filmes/models/filme.model';
export declare class Estilo extends Model {
    estilo: number;
    nome: string;
    filmes: Filme[];
}
