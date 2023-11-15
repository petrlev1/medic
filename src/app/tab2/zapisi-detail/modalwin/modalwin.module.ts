import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalwinPageRoutingModule } from './modalwin-routing.module';

import { ModalwinPage } from './modalwin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalwinPageRoutingModule
  ],
  declarations: [ModalwinPage]
})
export class ModalwinPageModule {}
