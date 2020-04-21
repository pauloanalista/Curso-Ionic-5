import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsheetPageRoutingModule } from './actionsheet-routing.module';

import { ActionsheetPage } from './actionsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsheetPageRoutingModule
  ],
  declarations: [ActionsheetPage]
})
export class ActionsheetPageModule {}
