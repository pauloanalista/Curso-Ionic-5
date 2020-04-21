import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderPage } from './reorder.page';

const routes: Routes = [
  {
    path: '',
    component: ReorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderPageRoutingModule {}
