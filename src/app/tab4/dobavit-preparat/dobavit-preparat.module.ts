import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DobavitPreparatPageRoutingModule } from './dobavit-preparat-routing.module';

import { DobavitPreparatPage } from './dobavit-preparat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DobavitPreparatPageRoutingModule
  ],
  declarations: [DobavitPreparatPage]
})
export class DobavitPreparatPageModule {}
