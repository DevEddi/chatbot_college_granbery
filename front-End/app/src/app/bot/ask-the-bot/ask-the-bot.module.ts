import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBotClientComponent } from './dialog-bot-client/dialog-bot-client.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    DialogBotClientComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class AskTheBotModule { }
