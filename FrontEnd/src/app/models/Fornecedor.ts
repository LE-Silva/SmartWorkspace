export class Fornecedor {
    cdfornecedor!: Number;
    nome!: string;
    tipo!: string;
    inscfed!: string;
    datanasc!: string;
    endereco!: string;
    email!: string;
    telefone!: string;
    status!: string;

    constructor(cdfornecedor: Number, nome: string, tipo: string, inscfed: string, datanasc: string, endereco: string,email: string, telefone:string, status:string){
        this.cdfornecedor = cdfornecedor;
        this.nome = nome;
        this.tipo = tipo;
        this.inscfed = inscfed;
        this.datanasc = datanasc;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.status = status;
    }
}
