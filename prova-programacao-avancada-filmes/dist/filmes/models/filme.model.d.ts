import { Model } from 'sequelize-typescript';
import { Estilo } from '../../estilos/models/estilo.model';
export declare class Filme extends Model {
    filme: number;
    estilo: number;
    nome: string;
    ano: string;
    duracao: string;
    foto: string;
    sinopse: string;
    video: string;
    dadosEstilo: Estilo;
}
