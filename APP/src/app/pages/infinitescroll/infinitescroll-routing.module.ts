import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitescrollPage } from './infinitescroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitescrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitescrollPageRoutingModule {}
