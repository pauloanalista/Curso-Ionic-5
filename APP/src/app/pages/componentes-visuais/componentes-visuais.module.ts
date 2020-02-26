import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesVisuaisPageRoutingModule } from './componentes-visuais-routing.module';

import { ComponentesVisuaisPage } from './componentes-visuais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesVisuaisPageRoutingModule
  ],
  declarations: [ComponentesVisuaisPage]
})
export class ComponentesVisuaisPageModule {}
