import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmazemComponent } from './armazem/armazem.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ComprasComponent } from './compras/compras.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendedorComponent } from './vendedor/vendedor.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent },
  {path: 'cadastros', component: CadastrosComponent},
  {path: 'duvidas', component: DuvidasComponent},
  {path: 'cadastros/clientes', component: ClienteComponent},
  {path: 'cadastros/vendedores', component: VendedorComponent},
  {path: 'cadastros/produtos', component: ProdutoComponent},
  {path: 'cadastros/armazem', component: ArmazemComponent},
  {path: 'cadastros/fornecedores', component:FornecedorComponent},
  {path: 'cadastros/solicitantes', component:SolicitanteComponent},
  {path: 'vender', component:VendasComponent},
  {path: 'compras', component:ComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
