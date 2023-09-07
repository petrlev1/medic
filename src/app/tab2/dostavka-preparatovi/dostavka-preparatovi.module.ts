import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DostavkaPreparatoviPageRoutingModule } from './dostavka-preparatovi-routing.module';

import { DostavkaPreparatoviPage } from './dostavka-preparatovi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DostavkaPreparatoviPageRoutingModule
  ],
  declarations: [DostavkaPreparatoviPage]
})
export class DostavkaPreparatoviPageModule {}
