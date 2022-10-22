import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NavComponent } from './nav/nav.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProdutoComponent } from './produto/produto.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { ArmazemComponent } from './armazem/armazem.component';
import { VendasComponent } from './vendas/vendas.component';
import { ComprasComponent } from './compras/compras.component';

@NgModule({
  declarations: [													
    AppComponent,
      UsuarioComponent,
      NavComponent,
      CadastrosComponent,
      DuvidasComponent,
      ClienteComponent,
      VendedorComponent,
      ProdutoComponent,
      FornecedorComponent,
      SolicitanteComponent,
      ArmazemComponent,
      VendasComponent,
      ComprasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
