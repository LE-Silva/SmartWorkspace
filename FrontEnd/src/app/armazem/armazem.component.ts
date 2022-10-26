import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armazem',
  templateUrl: './armazem.component.html',
  styleUrls: ['./armazem.component.css']
})
export class ArmazemComponent implements OnInit {

  selectedArmazem: any;

  armazens = [
    {
      id: 1,
      descricao: "Teste",
      responsavel: "Luis",
      maxcapacidade: 800,
      emuso: 50,
      status: "Ativo"
    },
    {
      id: 2,
      descricao: "Teste2",
      responsavel: "Luis",
      maxcapacidade: 800,
      emuso: 50,
      status: "Ativo"
    }
  ]

  selecionarArmazem(armazem: any){
    this.selectedArmazem = armazem;
  }

  voltar(){
    this.selectedArmazem = null;
  }

  calculos(emuso: number, maxcapacidade: number){
    return (emuso/maxcapacidade)*100
  }

  constructor() { }

  ngOnInit() {
  }

}
