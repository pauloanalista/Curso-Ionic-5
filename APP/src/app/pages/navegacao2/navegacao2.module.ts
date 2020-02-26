import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao2PageRoutingModule } from './navegacao2-routing.module';

import { Navegacao2Page } from './navegacao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao2PageRoutingModule
  ],
  declarations: [Navegacao2Page]
})
export class Navegacao2PageModule {}
