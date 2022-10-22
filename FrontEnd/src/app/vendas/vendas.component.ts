import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {
  
  public itens = [
    {id: '1', descricao: 'Primeiro', qtd: 2, precoUn: 150},
    {id: '2', descricao: 'Segundo', qtd: 3, precoUn: 200},
  ];

  public qtdItens = this.itens.length;
  public totalItens = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
