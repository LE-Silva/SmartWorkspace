import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css']
})
export class SolicitanteComponent implements OnInit {

  selectedSolicitante:any;

  solicitantes = [
    {
      cdsolicitante: 1,
      nome: "Luis Eduardo Jeronimo da Silva",
      superior: "Consumidor",
      inscfed: "00000000000",
      datanasc: "00/00/0000",
      endereco: "rua vereador pedro afonso de oliveira, 39",
      email: "teste@gmail.com",
      telefone: "14995874632",
      status: "Ativo"
    },
    {
      cdsolicitante: 2,
      nome: "Luis Eduardo Jeronimo da Silva",
      superior: "Revendedor",
      inscfed: "00000000000",
      datanasc: "00/00/0000",
      endereco: "rua vereador pedro afonso de oliveira, 39",
      email: "teste@gmail.com",
      telefone: "14995874632",
      status: "Ativo"
    }
  ]

  selecionarSolicitante(solicitante: any){
    this.selectedSolicitante = solicitante;
  }

  voltar(){
    this.selectedSolicitante = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
