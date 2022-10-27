export class Produto {
    cdproduto!: number;
    descricao!: string;
    tipo!: string;
    preco!: number;
    qtdestoque!: number;
    status!: string

    constructor(cdproduto: number, descricao: string, tipo: string, preco:number, qtdestoque: number, status: string){
        this.cdproduto = cdproduto;
        this.descricao = descricao;
        this.tipo = tipo;
        this.preco = preco;
        this.qtdestoque = qtdestoque;
        this.status = status
    }
}
