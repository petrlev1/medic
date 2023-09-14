import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinCodePageRoutingModule } from './pin-code-routing.module';

import { PinCodePage } from './pin-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinCodePageRoutingModule
  ],
  declarations: [PinCodePage]
})
export class PinCodePageModule {}
