import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesNativosPageRoutingModule } from './componentes-nativos-routing.module';

import { ComponentesNativosPage } from './componentes-nativos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesNativosPageRoutingModule
  ],
  declarations: [ComponentesNativosPage]
})
export class ComponentesNativosPageModule {}
