import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZakazatTestPageRoutingModule } from './zakazat-test-routing.module';

import { ZakazatTestPage } from './zakazat-test.page';

import { MaskitoModule } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZakazatTestPageRoutingModule,
    MaskitoModule
  ],
  declarations: [ZakazatTestPage]
})
export class ZakazatTestPageModule {}
