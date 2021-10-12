import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ChatBotService} from "./chat-bot.service";

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  displayedColumns = ['id', 'name', 'email'];
  dataSource!: MatTableDataSource<any>;
  constructor(private service: ChatBotService) {

  }

  ngOnInit(): void {
    this.service.getUserData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response)
      console.log('response is', response);
    })
  }

}
