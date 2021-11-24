import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const dialogflowURL = 'http://localhost:3000/api/requestText/';
const projectId = "ttmchatbot-gkyi";

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_zwn4lh9', 'template_uxsk6b6', e.target as HTMLFormElement, 'user_cgPtcAU8yrRkgyA5ErJ9l')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  successNotification(){
    Swal.fire('Enviado', 'Aguarde resposta por e-mail.', 'success')
  }

  messages = [];
  loading = false;

  sessionId = Math.random().toString(36).slice(-5);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.addBotMessage('Olá, me envie sua dúvida. ');
  }

  handleUserMessage(event) {
    console.log(event);
    const text = event.message;
    this.addUserMessage(text);

    this.loading = true;

    this.http.post<any>(
      dialogflowURL,
      {
        projectId,
        text,
      }
    )
      .subscribe(res => {
        this.addBotMessage(res.text);
        this.loading = false;
      });
  }

  addUserMessage(text) {
    this.messages.push({
      text,
      sender: 'Você',
      reply: true,
      date: new Date()
    });
  }

  addBotMessage(text) {
    this.messages.push({
      text,
      sender: 'Agulhão',
      avatar: '/assets/images/agulhaoLogo.svg',
      date: new Date()
    });
  }

}
