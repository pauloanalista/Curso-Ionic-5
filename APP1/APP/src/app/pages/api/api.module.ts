import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiPageRoutingModule } from './api-routing.module';

import { ApiPage } from './api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiPageRoutingModule
  ],
  declarations: [ApiPage]
})
export class ApiPageModule {}
