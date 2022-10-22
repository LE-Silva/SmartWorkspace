import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores = [
    {
      cdfornecedor: 1,
      nome: "Luis Eduardo Jeronimo da Silva",
      tipo: "Consumidor",
      inscfed: "00000000000",
      datanasc: "00/00/0000",
      endereco: "rua vereador pedro afonso de oliveira, 39",
      email: "teste@gmail.com",
      telefone: "14995874632",
      status: "Ativo"
    },
    {
      cdfornecedor: 2,
      nome: "Luis Eduardo Jeronimo da Silva",
      tipo: "Revendedor",
      inscfed: "00000000000",
      datanasc: "00/00/0000",
      endereco: "rua vereador pedro afonso de oliveira, 39",
      email: "teste@gmail.com",
      telefone: "14995874632",
      status: "Ativo"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
