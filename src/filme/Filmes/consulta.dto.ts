export class filmeUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly duracao: number,
        readonly sinopse: string,
        readonly genero: string
        
        ){}
}