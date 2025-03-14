import { IsInt, IsNotEmpty, IsOptional, IsString,} from "class-validator";


export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    id:string;
    
    @IsInt()
    @IsOptional()
    nome: string;

    @IsString()
    @IsOptional()
    duracao: Number;
   
    @IsOptional()
    sinopse: string;

    @IsString()
    @IsOptional()
    ano: string;

    
    @IsString()
    @IsOptional()
    genero: string;

    @IsString()
    @IsOptional()
    senha: string; 
}