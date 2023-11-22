import { IsString } from "class-validator";

export class CreateLibroDto {
    @IsString()
    readonly nombre: string;

    
}
