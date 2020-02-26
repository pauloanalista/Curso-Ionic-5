import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotaoPage } from './botao.page';

const routes: Routes = [
  {
    path: '',
    component: BotaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotaoPageRoutingModule {}
