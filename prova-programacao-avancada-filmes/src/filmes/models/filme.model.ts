import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Estilo } from '../../estilos/models/estilo.model';

@Table({
  tableName: 'filmes',
  timestamps: false,
})
export class Filme extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
  })
  declare filme: number;

  @ForeignKey(() => Estilo)
  @Column({
    type: DataType.TINYINT,
    allowNull: false,
  })
  declare estilo: number;

  @Column({
    type: DataType.CHAR(30),
    allowNull: false,
  })
  declare nome: string;

  @Column({
    type: DataType.CHAR(4),
    allowNull: false,
  })
  declare ano: string;

  @Column({
    type: DataType.CHAR(3),
    allowNull: false,
  })
  declare duracao: string;

  @Column({
    type: DataType.CHAR(45),
    allowNull: true,
  })
  declare foto: string;

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  declare sinopse: string;

  @Column({
    type: DataType.CHAR(45),
    allowNull: true,
  })
  declare video: string;

  @BelongsTo(() => Estilo)
  declare dadosEstilo: Estilo;
}
