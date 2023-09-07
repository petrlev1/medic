import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoprosiPageRoutingModule } from './voprosi-routing.module';

import { VoprosiPage } from './voprosi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoprosiPageRoutingModule
  ],
  declarations: [VoprosiPage]
})
export class VoprosiPageModule {}
