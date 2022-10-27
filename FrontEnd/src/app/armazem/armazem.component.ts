import { Component, OnInit } from '@angular/core';
import { Armazem } from '../models/Armazem';

@Component({
  selector: 'app-armazem',
  templateUrl: './armazem.component.html',
  styleUrls: ['./armazem.component.css']
})
export class ArmazemComponent implements OnInit {

  selectedArmazem!: Armazem;

  armazens = [
    new Armazem(5, "Almoxarifado", "Luis", 800, 200, "Ativo"),
    new Armazem(6, "Peodução", "Teste", 5456, 465, "Ativo"),
  ]

  selecionarArmazem(armazem: Armazem){
    this.selectedArmazem = armazem;
  }

  voltar(){
    this.selectedArmazem = null as any;
  }

  calculos(emuso: number, maxcapacidade: number){
    return ((emuso/maxcapacidade)*100) as Number
  }

  constructor() { }

  ngOnInit() {
  }

}
