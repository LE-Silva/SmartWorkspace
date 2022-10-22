import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  
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
