export class Armazem {
    id!: Number;
    descricao!: string;
    responsavel!: string;
    maxcapacidade!: number;
    emuso!: number;
    status!: string;

    constructor(id: Number, descricao: string, responsavel: string, maxcapacidade: number, emuso: number, status: string){
        this.id = id;
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.maxcapacidade = maxcapacidade;
        this.emuso = emuso;
        this.status = status;
    }
}
