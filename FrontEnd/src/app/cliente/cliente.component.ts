import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  selectedCliente!: Cliente;

  clientes = [
    new Cliente(5, "Luis Eduardo Jeronimo da Silva", "Teste", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
    new Cliente(6, "Luis Eduardo Jeronimo da Silva", "Teste2", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
  ]

  selecionarCliente(cliente: Cliente){
    this.selectedCliente = cliente
  }

  voltar(){
    this.selectedCliente = null as any;
  }

  constructor() { }

  ngOnInit() {
  }

}
