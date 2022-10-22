import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmazemComponent } from './armazem/armazem.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutoComponent } from './produto/produto.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VendedorComponent } from './vendedor/vendedor.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent },
  {path: 'cadastros', component: CadastrosComponent},
  {path: 'duvidas', component: DuvidasComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'vendedores', component: VendedorComponent},
  {path: 'produtos', component: ProdutoComponent},
  {path: 'armazem', component: ArmazemComponent},
  {path: 'fornecedores', component:FornecedorComponent},
  {path: 'solicitantes', component:SolicitanteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
