import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastPageRoutingModule } from './toast-routing.module';

import { ToastPage } from './toast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastPageRoutingModule
  ],
  declarations: [ToastPage]
})
export class ToastPageModule {}
