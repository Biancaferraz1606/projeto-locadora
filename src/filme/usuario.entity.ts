export class UsuarioEntity{
    id: string;
    nome: string;
    duracao: Number;
    sinopse: string;
    ano: string;
    gereno: string;
    genero: string;
   
     
    constructor(id: string,nome: string, duracao: Number, sinopse: string, ano: string, genero: string ){
        this.id = id;
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = this.gereno;
       
    }
}