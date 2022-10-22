import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armazem',
  templateUrl: './armazem.component.html',
  styleUrls: ['./armazem.component.css']
})
export class ArmazemComponent implements OnInit {

  armazens = [
    {
      id: 1,
      descricao: "Teste",
      responsavel: "Luis",
      maxcapacidade: 800,
      emuso: "50%",
      status: "Ativo"
    },
    {
      id: 2,
      descricao: "Teste2",
      responsavel: "Luis",
      maxcapacidade: 800,
      emuso: "50%",
      status: "Ativo"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
