import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacaoPage } from './navegacao.page';

const routes: Routes = [
  {
    path: '',
    component: NavegacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegacaoPageRoutingModule {}
