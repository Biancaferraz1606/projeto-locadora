import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class criaUsuarioDTO {
    @IsString()
    @IsNotEmpty({ message: "nome Não pode ser vazio" })
    nome: string;

    @IsInt()
    idade: Number;

    @IsString()
    cidade: string;

    @IsEmail(undefined, { message: "email é inválido" })
    @EmailUnico({ message: "email já cadastrado. Tente novamente" })
    email: string;

    @IsString()
    telefone: string;

    senha: string;
}