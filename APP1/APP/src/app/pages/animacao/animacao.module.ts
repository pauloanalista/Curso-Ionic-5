import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacaoPageRoutingModule } from './animacao-routing.module';

import { AnimacaoPage } from './animacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacaoPageRoutingModule
  ],
  declarations: [AnimacaoPage]
})
export class AnimacaoPageModule {}
