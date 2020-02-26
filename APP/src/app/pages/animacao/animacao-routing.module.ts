import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimacaoPage } from './animacao.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacaoPageRoutingModule {}
