import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPageRoutingModule } from './select-routing.module';

import { SelectPage } from './select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPageRoutingModule
  ],
  declarations: [SelectPage]
})
export class SelectPageModule {}
