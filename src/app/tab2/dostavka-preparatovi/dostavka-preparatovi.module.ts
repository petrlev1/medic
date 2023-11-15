import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DostavkaPreparatoviPageRoutingModule } from './dostavka-preparatovi-routing.module';

import { DostavkaPreparatoviPage } from './dostavka-preparatovi.page';


import { MaskitoModule } from '@maskito/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DostavkaPreparatoviPageRoutingModule,
    MaskitoModule
  ],
  declarations: [DostavkaPreparatoviPage]
})
export class DostavkaPreparatoviPageModule {}
