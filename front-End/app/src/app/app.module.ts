import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './view/footer/footer.component';
import { AsideComponent } from './view/aside/aside.component';
import { HomeComponent } from './view/home/home.component';
import { CadastroComponent } from './view/footer/cadastro/cadastro.component';
import { TelefoneComponent } from './view/footer/telefone/telefone.component';
import { LocalizacaoComponent } from './view/footer/localizacao/localizacao.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    CadastroComponent,
    TelefoneComponent,
    LocalizacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
