export class Vendedor {
    cdvendedor!: number;
    nome!: string;
    superior!:string;
    inscfed!: string;
    datanasc!:string;
    endereco!: string;
    email!: string;
    telefone!: string;
    status!: string;

    constructor(cdvendedor: number, nome: string, superior: string, inscfed: string, datanasc: string, endereco: string, email: string, telefone: string, status: string){
        this.cdvendedor = cdvendedor;
        this.nome = nome;
        this.superior = superior;
        this.inscfed = inscfed;
        this.datanasc = datanasc;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.status = status;
    }
}
