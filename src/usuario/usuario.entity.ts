export class UsuarioEntity{
    id: string;
    nome: string;
    idade: Number;
    cidade: string;
    email: string;
    telefone: string;
    senha: string; 
    duracao: number;
    sinopse: string;
    ano: string;
    genero: any;
    constructor(id: string,nome: string,idade: Number,cidade: string,email: string,telefone: string,senha: string){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
    }
}