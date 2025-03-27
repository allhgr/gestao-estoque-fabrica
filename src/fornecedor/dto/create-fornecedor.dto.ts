import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt, IsEmail } from "class-validator";
export class CreateFornecedorDto {
    @IsNotEmpty()
    @ApiProperty({example: "Insira o ID (sem aspas)"})
    @IsInt()
    id: number;
    
    @ApiProperty({example:"Insira a Razão Social"})
    @IsString()
    razaosocial?: string;

    @ApiProperty({example:"Nome Fantasia"})
    @IsString()
    nomefantasia: string;

    @ApiProperty({example:"Insira o CNPJ"})
    @IsString()
    cnpj: string;

    @ApiProperty({example:"Insira o Email"})
    @IsEmail()
    email: string;

    @ApiProperty({example:"Insira o Telefone"})
    @IsString()
    telefone: string;
}