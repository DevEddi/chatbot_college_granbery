import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-the-bot',
  templateUrl: './ask-the-bot.component.html',
  styleUrls: ['./ask-the-bot.component.css']
})
export class AskTheBotComponent implements OnInit {
  nomeBot: string = "Agulhão Bot";
  alunoAleatorio : string = "Aluno";
  constructor() { }

  ngOnInit(): void {
  }

  openDialog(): void {}
}
