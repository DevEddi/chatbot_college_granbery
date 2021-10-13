import { Component, OnInit } from '@angular/core';
import { DialogBotClientComponent } from './dialog-bot-client/dialog-bot-client.component';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-ask-the-bot',
  templateUrl: './ask-the-bot.component.html',
  styleUrls: ['./ask-the-bot.component.css']
})
export class AskTheBotComponent implements OnInit {
  nomeBot: string = "Agulhão Bot";
  alunoAleatorio : string = "Aluno";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirDialogoComBot(): void {
    const dialogRef = this.dialog.open(DialogBotClientComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
