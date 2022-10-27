export class Solicitante {
    cdsolicitante!: number
    nome!: string;
    superior!:string;
    inscfed!: string;
    datanasc!: string;
    endereco!: string;
    email!: string;
    telefone!: string;
    status!: string;

    constructor(cdsolicitante: number, nome: string, superior: string, inscfed: string, datanasc: string, endereco: string, email: string, telefone: string, status: string){
        this.cdsolicitante = cdsolicitante;
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
