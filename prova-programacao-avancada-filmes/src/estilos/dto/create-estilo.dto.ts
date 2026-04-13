import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateEstiloDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  nome!: string;
}
