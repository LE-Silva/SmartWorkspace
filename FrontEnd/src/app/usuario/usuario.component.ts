import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario_em_exibicao = {
      username: "",
      nome: "",
      cargo: "",
      email: "",
      estado: "",
      endereco: "",
      cidade: "",
      cep: ""
  };

  public usuarios = [
    { 
      username: "LJS",
      nome: "Luis",
      cargo: "Chefe",
      email: "ljs@gmail.com",
      endereco: "teste, 185",
      estado: "SP",
      cidade: "Garça",
      cep: "17400-372"
    },
    {
      username: "ANN",
      nome: "Anna",
      cargo: "Chefe",
      email: "ljs@gmail.com",
      estado: "SP",
      endereco: "teste, 185",
      cidade: "Garça",
      cep: "17400-372"
    },
    {
      username: "CAS",
      nome: "Cássio",
      cargo: "Chefe",
      email: "ljs@gmail.com",
      estado: "SP",
      endereco: "teste, 185",
      cidade: "Garça",
      cep: "17400-372"
    }
  ]

  public definir_atual(usernameNew:string, nomeNew: string, cargoNew: string, emailNew: string, estadoNew: string, cidadeNew: string, cepNew: string, enderecoNew: string): void {
    this.usuario_em_exibicao =
      {
        username: usernameNew,
        nome: nomeNew,
        cargo: cargoNew,
        email: emailNew,
        estado: estadoNew,
        endereco: enderecoNew,
        cidade: cidadeNew,
        cep: cepNew
      };

  }

  constructor() { }

  ngOnInit() {
  }

}