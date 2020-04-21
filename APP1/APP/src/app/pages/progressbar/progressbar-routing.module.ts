import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressbarPage } from './progressbar.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressbarPageRoutingModule {}
