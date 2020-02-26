import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentPageRoutingModule } from './content-routing.module';

import { ContentPage } from './content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentPageRoutingModule
  ],
  declarations: [ContentPage]
})
export class ContentPageModule {}
