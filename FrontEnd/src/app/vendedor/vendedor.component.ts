import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  selectedVendedor: any;

  vendedores = [
    {
      cdvendedor: 1,
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
      cdvendedor: 2,
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

  selecionarVendededor(vendedor: any){
    this.selectedVendedor = vendedor;
  }

  voltar(){
    this.selectedVendedor = null;
  }


  constructor() { }

  ngOnInit() {
  }

}
