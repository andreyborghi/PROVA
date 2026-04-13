import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Filme } from '../../filmes/models/filme.model';

@Table({
  tableName: 'estilos',
  timestamps: false,
})
export class Estilo extends Model {
  @PrimaryKey
  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    autoIncrement: true,
  })
  declare estilo: number;

  @Column({
    type: DataType.CHAR(15),
    allowNull: false,
  })
  declare nome: string;

  @HasMany(() => Filme)
  declare filmes: Filme[];
}
