import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../models/Fornecedor';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  selectedFornecedor!:Fornecedor;

  fornecedores = [
    new Fornecedor(1, "Luis Eduardo Jeronimo da Silva", "cons", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
    new Fornecedor(2, "Luis Eduardo Jeronimo da Silva", "cons", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
  ]

  selecionarFornecedor(fornecedor: Fornecedor){
    this.selectedFornecedor = fornecedor
  }

  voltar(){
    this.selectedFornecedor = null as any;
  }

  constructor() { }

  ngOnInit() {
  }

}
