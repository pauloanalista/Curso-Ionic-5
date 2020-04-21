import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TexttospeechPage } from './texttospeech.page';

const routes: Routes = [
  {
    path: '',
    component: TexttospeechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TexttospeechPageRoutingModule {}
