import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao2Page } from './navegacao2.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao2PageRoutingModule {}
