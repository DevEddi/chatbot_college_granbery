import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-bot-client',
  templateUrl: './dialog-bot-client.component.html',
  styleUrls: ['./dialog-bot-client.component.css']
})
export class DialogBotClientComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBotClientComponent>
  ) { }

  ngOnInit(): void {
  }
  cancelar(): void {
    this.dialogRef.close();
  }

}
