import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherPageRoutingModule } from './refresher-routing.module';

import { RefresherPage } from './refresher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherPageRoutingModule
  ],
  declarations: [RefresherPage]
})
export class RefresherPageModule {}
