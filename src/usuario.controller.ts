import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuariosArmazenados } from "./usuario/usuario.dm";
import { UsuarioEntity } from "./usuario/usuario.entity";
import { criaUsuarioDTO } from "./usuario/dto/usuario.dto";

import {v4 as uuid} from 'uuid';// importante que seja colocado o import dessa forma sempre
import { ListaUsuarioDTO } from "./usuario/dto/consulta.dto";
import { alteraUsuarioDTO } from "./usuario/dto/alteraUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
        
    }    
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        
         
        var novoUsuario = new UsuarioEntity(uuid(),dadosUsuario.nome,
                                            dadosUsuario.idade,dadosUsuario.cidade,dadosUsuario.email,
                                            dadosUsuario.telefone,dadosUsuario.senha);
        this.clsUsuariosArmazenados.AdicionarUsuario(novoUsuario);

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
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.email
            )
        );
        
        return listaRetorno;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: alteraUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUSuario(id, novosDados)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        }
    }

    
}