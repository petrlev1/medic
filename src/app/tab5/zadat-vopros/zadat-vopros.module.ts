import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZadatVoprosPageRoutingModule } from './zadat-vopros-routing.module';

import { ZadatVoprosPage } from './zadat-vopros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZadatVoprosPageRoutingModule
  ],
  declarations: [ZadatVoprosPage]
})
export class ZadatVoprosPageModule {}
