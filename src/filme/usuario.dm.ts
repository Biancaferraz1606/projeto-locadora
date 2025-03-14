import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { filmeUsuarioDTO } from "./Filmes/consulta.dto";

@Injectable()
export class UsuariosArmazenados{

    AdicionarUsuario(usuario: UsuarioEntity){
        this.Usuarios.push(usuario);
    }

    get Usuarios(){        
        return this.Usuarios;
    }

    async Usuario({ id, nome, duracao, sinopse, ano, genero }: { id: string; nome: string; duracao: number; sinopse: string; ano: string; genero: string; }){
        const usuario = this.buscaPorID(id);

      this.Usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )

        return usuario;
    }

    atualizaUSuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>){

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                if (valor === undefined){
                    return
                }
            }
        )

        return filmeUsuarioDTO;
    }

    private buscaPorID(id: string){
        const possivelUsuario =     this.Usuarios.find(
            (            usuarioSalvo: { id: string; }) => usuarioSalvo.id === id
        )

        if (!possivelUsuario){
            throw new Error('Usuario nao encontrado')
        }
        
        return possivelUsuario;
    }

}