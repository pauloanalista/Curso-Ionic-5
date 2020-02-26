import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {

  menuCollection: any[] = [];
  constructor(private navCtrl: NavController) {

    this.menuCollection = [
      {
        title: 'Navegação',
        url: 'navegacao',
        icon: 'paper-plane'
      },
      {
        title: 'Botões',
        url: 'botao',
        icon: 'construct'
      },
      {
        title: 'Alert',
        url: 'alert',
        icon: 'construct'
      },
      {
        title: 'Action-Sheet',
        url: 'actionsheet',
        icon: 'construct'
      },
      {
        title: 'Badge',
        url: 'badge',
        icon: 'construct'
      },
      {
        title: 'Card',
        url: 'card',
        icon: 'construct'
      },
      {
        title: 'CheckBox',
        url: 'checkbox',
        icon: 'construct'
      },
      {
        title: 'Chip',
        url: 'chip',
        icon: 'construct'
      },
      {
        title: 'Content',
        url: 'content',
        icon: 'construct'
      },
      {
        title: 'DateTime',
        url: 'datetime',
        icon: 'construct'
      },
      {
        title: 'Fab',
        url: 'fab',
        icon: 'construct'
      },
      {
        title: 'Grid',
        url: 'grid',
        icon: 'construct'
      },
      {
        title: 'Infinite Scroll',
        url: 'infinitescroll',
        icon: 'construct'
      },
      {
        title: 'Input',
        url: 'input',
        icon: 'construct'
      },
      {
        title: 'List',
        url: 'list',
        icon: 'construct'
      },
      {
        title: 'Progress Bar',
        url: 'progressbar',
        icon: 'construct'
      },
      {
        title: 'Refresher',
        url: 'refresher',
        icon: 'construct'
      },
      {
        title: 'Reorder',
        url: 'reorder',
        icon: 'construct'
      },
      {
        title: 'Select',
        url: 'select',
        icon: 'construct'
      },
      {
        title: 'Toggle',
        url: 'toggle',
        icon: 'construct'
      },
      {
        title: 'Searchbar',
        url: 'searchbar',
        icon: 'construct'
      },
      {
        title: 'Segment',
        url: 'segment',
        icon: 'construct'
      },
      {
        title: 'Slides',
        url: 'slides',
        icon: 'construct'
      },
      {
        title: 'Toast',
        url: 'toast',
        icon: 'construct'
      },
      {
        title: 'Modal',
        url: 'modal',
        icon: 'construct'
      },
      {
        title: 'Popover',
        url: 'popover',
        icon: 'construct'
      },
      {
        title: 'Radio',
        url: 'radio',
        icon: 'construct'
      },
      {
        title: 'Animacao',
        url: 'animacao',
        icon: 'construct'
      },
    ];
  }

  ngOnInit() {
  }

  showPage(url: string) {
    this.navCtrl.navigateForward(url);
  }
}
