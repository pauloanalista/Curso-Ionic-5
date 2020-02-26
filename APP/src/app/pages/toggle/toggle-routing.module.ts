import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TogglePage } from './toggle.page';

const routes: Routes = [
  {
    path: '',
    component: TogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TogglePageRoutingModule {}
