import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './view/footer/footer.component';
import { AsideComponent } from './view/aside/aside.component';
import { ViewDuvidaComponent } from './bot/coordenador/view-duvida/view-duvida.component';
import { NavbarComponent } from './bot/navbar/navbar.component';
import { ViewPerguntaComponent } from './bot/aluno/view-pergunta/view-pergunta.component';
import { ChatBotComponent } from './bot/aluno/chat-bot/chat-bot.component';
import { CriaChatBotComponent } from './bot/coordenador/cria-chat-bot/cria-chat-bot.component';
import { HomeComponent } from './view/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AsideComponent,
    ViewDuvidaComponent,
    NavbarComponent,
    ViewPerguntaComponent,
    ChatBotComponent,
    CriaChatBotComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
