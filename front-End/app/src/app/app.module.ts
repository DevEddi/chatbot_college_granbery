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
import { ChatBotComponent } from './bot/chat-bot/chat-bot.component';
import { AskTheBotComponent } from './bot/ask-the-bot/ask-the-bot.component';
import { NavBarComponent } from './bot/nav-bar/nav-bar.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    CadastroComponent,
    TelefoneComponent,
    LocalizacaoComponent,
    ChatBotComponent,
    AskTheBotComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
