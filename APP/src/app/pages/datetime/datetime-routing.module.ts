import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePage } from './datetime.page';

const routes: Routes = [
  {
    path: '',
    component: DatetimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimePageRoutingModule {}
