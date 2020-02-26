import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPage } from './select.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPageRoutingModule {}
