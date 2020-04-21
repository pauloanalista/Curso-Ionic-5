import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotaoPageRoutingModule } from './botao-routing.module';

import { BotaoPage } from './botao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotaoPageRoutingModule
  ],
  declarations: [BotaoPage]
})
export class BotaoPageModule {}
