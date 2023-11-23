import { IsInt, IsString } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly edicion: string;

  @IsInt()
  readonly anio: number;

  @IsString()
  readonly detalle: string;
}
