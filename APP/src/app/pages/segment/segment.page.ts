import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  opcaoSelecionada: string = 'frutas';
  constructor() { }

  ngOnInit() {
  }

  selecionar(ev: any) {
    console.log(ev);

    this.opcaoSelecionada = ev.detail.value;
  }

}
