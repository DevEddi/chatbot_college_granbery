import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './view/footer/footer.component';
import { AsideComponent } from './view/aside/aside.component';
import { HomeComponent } from './view/home/home.component';
import { CadastroComponent } from './view/aside/cadastro/cadastro.component';
import { TelefoneComponent } from './view/aside/telefone/telefone.component';
import { LocalizacaoComponent } from './view/aside/localizacao/localizacao.component';
import { ChatbotComponent } from './bot/chatbot/chatbot.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NbThemeModule, NbLayoutModule, NbChatModule, NbSpinnerModule, NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    CadastroComponent,
    TelefoneComponent,
    LocalizacaoComponent,
    ChatbotComponent,
    NavBarComponent,

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
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbSpinnerModule,
    NbButtonModule

  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
