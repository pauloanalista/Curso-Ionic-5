import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarPageRoutingModule } from './searchbar-routing.module';

import { SearchbarPage } from './searchbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarPageRoutingModule
  ],
  declarations: [SearchbarPage]
})
export class SearchbarPageModule {}
