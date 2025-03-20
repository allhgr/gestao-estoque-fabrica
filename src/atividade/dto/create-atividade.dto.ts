import { IsNotEmpty, IsString } from "class-validator";
export class CreateAtividadeDto {
 @IsNotEmpty()
 @IsString()
 descricao: string;
 @IsNotEmpty()
 dataInicio: Date;
 @IsNotEmpty()
 dataFim: Date;
}
