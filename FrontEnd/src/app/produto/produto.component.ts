import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  selectedProduto!: Produto;

  produtos = [
    new Produto(5, "Doçes", "Comprado", 0.80, 2000, "Ativo"),
    new Produto(6, "Refrigerante", "Comprado", 3.65 , 465, "Ativo"),
  ]

  selecionarProduto(produto: Produto){
    this.selectedProduto = produto;
  }

  voltar(){
    this.selectedProduto = null as any;
  }

  constructor() { }

  ngOnInit() {
  }

}
