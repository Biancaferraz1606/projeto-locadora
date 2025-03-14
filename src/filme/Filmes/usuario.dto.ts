import {  IsInt, IsNotEmpty, IsString } from "class-validator";


export class criaUsuarioDTO {
    @IsString()
    @IsNotEmpty()
   id: string;

    @IsInt()
    nome: string;

    @IsString()
    duracao: number;

    @IsString()
    sinopse: string;

    @IsString()
    ano: string;

    @IsString()
    genero: string;


}