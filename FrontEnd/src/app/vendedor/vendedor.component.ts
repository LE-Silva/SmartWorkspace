import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../models/Vendedor';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  selectedVendedor!: Vendedor;

  vendedores = [
    new Vendedor(5, "Luis Eduardo Jeronimo da Silva", "Teste", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
    new Vendedor(6, "Luis Eduardo Jeronimo da Silva", "Teste2", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
  ]

  selecionarVendededor(vendedor: Vendedor){
    this.selectedVendedor = vendedor;
  }

  voltar(){
    this.selectedVendedor = null as any;
  }


  constructor() { }

  ngOnInit() {
  }

}
