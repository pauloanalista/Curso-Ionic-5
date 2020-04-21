import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipPage } from './chip.page';

const routes: Routes = [
  {
    path: '',
    component: ChipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipPageRoutingModule {}
