import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LichnieDanniePageRoutingModule } from './lichnie-dannie-routing.module';

import { LichnieDanniePage } from './lichnie-dannie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LichnieDanniePageRoutingModule
  ],
  declarations: [LichnieDanniePage]
})
export class LichnieDanniePageModule {}
