import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateFilmeDto {
  @IsInt()
  estilo!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  nome!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  ano!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  duracao!: string;

  @IsOptional()
  @IsString()
  @MaxLength(45)
  foto?: string;

  @IsOptional()
  @IsString()
  sinopse?: string;

  @IsOptional()
  @IsString()
  @MaxLength(45)
  video?: string;
}
