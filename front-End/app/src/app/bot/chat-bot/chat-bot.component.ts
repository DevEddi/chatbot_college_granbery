import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  //Processar Formulario

  $('#tabelaPerguntas').submit(function (event) {
    event.preventDefault();


    //Criar formData
    var formData = {

      'nome_receita': $('#input_nome_receita').val(),
      'valor_receita': $('#input_valor_receita').val(),
      'descricao_receita': $('#input_descricao_receita').val()
    };

    $.ajax({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Beaver ' + $.cookie('jwt_token'),
      },
      type: 'POST',
      url: 'http://localhost:8080/api/receita/incluir',
      data: JSON.stringify(formData),
      dataType: 'json',
      encode: true,
      success: function (data) {
        location.href = 'receita.html';

      },
      error: function (data) {
        $('#div-alert-message').prepend(data.responseText);
        $('#div-alert-message').fadeIn();
      }

    });

  });

  */
}
