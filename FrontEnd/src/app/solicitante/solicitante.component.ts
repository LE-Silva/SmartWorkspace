import { Component, OnInit } from '@angular/core';
import { Solicitante } from '../models/Solicitante';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css']
})
export class SolicitanteComponent implements OnInit {

  selectedSolicitante!:Solicitante;

  solicitantes = [
    new Solicitante(1, "Luis Eduardo Jeronimo da Silva", "Teste", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
    new Solicitante(2, "Luis Eduardo Jeronimo da Silva", "Teste2", "545661", "465165", "7660", "4865465", "8798646", "12458799"),
  ]

  selecionarSolicitante(solicitante: Solicitante){
    this.selectedSolicitante = solicitante;
  }

  voltar(){
    this.selectedSolicitante = null as any;
  }

  constructor() { }

  ngOnInit() {
  }

}
