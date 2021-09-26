import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/footer/cadastro/cadastro.component';
import {HomeComponent} from "./view/home/home.component";
import {TelefoneComponent} from "./view/footer/telefone/telefone.component";
import {LocalizacaoComponent} from "./view/footer/localizacao/localizacao.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'cadastro',
    component:CadastroComponent,
  },
  {
    path:'telefone',
    component:TelefoneComponent,
  },
  {
    path:'localizacao',
    component:LocalizacaoComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
