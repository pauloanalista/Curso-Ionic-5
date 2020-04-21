import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegacaoPageRoutingModule } from './navegacao-routing.module';

import { NavegacaoPage } from './navegacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacaoPageRoutingModule
  ],
  declarations: [NavegacaoPage]
})
export class NavegacaoPageModule {}
