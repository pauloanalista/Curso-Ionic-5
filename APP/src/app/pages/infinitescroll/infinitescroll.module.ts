import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitescrollPageRoutingModule } from './infinitescroll-routing.module';

import { InfinitescrollPage } from './infinitescroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitescrollPageRoutingModule
  ],
  declarations: [InfinitescrollPage]
})
export class InfinitescrollPageModule {}
