import { IsNotEmpty, IsString, IsInt, IsEmail } from "class-validator";
export class CreateFornecedorDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
    
    @IsString()
    razaosocial?: string;

    @IsString()
    nomefantasia: string;

    @IsInt()
    cnpj: number;

    @IsEmail()
    email: string;

    @IsInt()
    telefone: number;
}