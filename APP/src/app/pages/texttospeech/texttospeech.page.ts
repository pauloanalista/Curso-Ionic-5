import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-texttospeech',
  templateUrl: './texttospeech.page.html',
  styleUrls: ['./texttospeech.page.scss'],
})
export class TexttospeechPage implements OnInit {

  textoASerFalado: string = 'Olá mundo';
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }

  falar() {
    this.tts.speak({
      text: this.textoASerFalado,
      locale: 'pt-BR',
      rate: 0.75
    })
      .then(() => {
        alert('Falou com sucesso!');
      })
      .catch((erro: any) => {
        alert(erro);
      })
  }
}
