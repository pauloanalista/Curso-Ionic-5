import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { PopoverInternoComponent } from 'src/app/components/popover-interno/popover-interno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule
  ],
  declarations: [PopoverPage, PopoverInternoComponent],
  entryComponents: [PopoverInternoComponent]
})
export class PopoverPageModule { }
