import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

import { UsuarioEntity } from "src/filme/usuario.entity"

import { filmeUsuarioDTO } from "./consulta.dto";
import { alteraUsuarioDTO } from "./alteraUsuario.dto";
import { UsuariosArmazenados } from "src/usuario/usuario.dm";
import { criaUsuarioDTO } from "./usuario.dto";


@Controller('/usuarios')
export class UsuarioController{
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
        
    }    
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        
         
        var novoUsuario = new UsuarioEntity(uuid(),id, nome, duracao, sinopse, ano , genero);
        this.clsUsuariosArmazenados.AdicionarUsuario();

        var usuario = {
            dadosUsuario : novoUsuario,
            status: "Usuario Criado"
        }
        return usuario;
    }

    @Get()
    async listaUsuarios(){
        

        const usuariosListados = this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new filmeUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.duracao,
                usuario.sinopse,
                usuario.ano,
                usuario.genero

            )
        );
        
        return listaRetorno;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, nome: string, duracao: number, sinopse: string, ano: string ,
     genero: string @Body() novosDados: alteraUsuarioDTO){
        const usuarioAtualizado = this.clsUsuariosArmazenados.atualizaUSuario(id, nome, duracao, sinopse,ano, genero)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        }
    }


    
}

function uuid(): any {
    throw new Error("Function not implemented.");
}
