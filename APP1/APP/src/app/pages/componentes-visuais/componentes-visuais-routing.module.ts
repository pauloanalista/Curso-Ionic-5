import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesVisuaisPage } from './componentes-visuais.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesVisuaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesVisuaisPageRoutingModule {}
