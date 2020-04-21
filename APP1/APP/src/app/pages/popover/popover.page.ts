import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInternoComponent } from 'src/app/components/popover-interno/popover-interno.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInternoComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
