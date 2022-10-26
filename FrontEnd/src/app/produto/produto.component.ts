import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  selectedProduto: any;

  produtos = [
    {
      cdproduto: 1,
      descricao: "Balas",
      tipo: "Comprado",
      preco: 0.35,
      qtdestoque: 0,
      status: "Ativo"
    },
    {
      cdproduto: 2,
      descricao: "Celular",
      tipo: "Manufaturado",
      preco: 1600.00,
      qtdestoque: 2,
      status: "Ativo"
    },
  ]

  selecionarProduto(produto: any){
    this.selectedProduto = produto;
  }

  voltar(){
    this.selectedProduto = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
