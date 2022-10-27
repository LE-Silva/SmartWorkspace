export class Cliente {
    cdcliente!: Number;
    nome!: string;
    tipo!: string;
    inscfed!: string;
    datanasc!: string;
    endereco!: string;
    email!: string;
    telefone!: string;
    status!: string;

    constructor(cdcliente: number, nome: string, tipo: string, inscfed: string, datanasc: string, endereco: string, email: string, telefone: string, status: string){
        this.cdcliente = cdcliente;
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
