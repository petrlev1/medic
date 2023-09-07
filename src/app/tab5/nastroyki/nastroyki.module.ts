import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NastroykiPageRoutingModule } from './nastroyki-routing.module';

import { NastroykiPage } from './nastroyki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NastroykiPageRoutingModule
  ],
  declarations: [NastroykiPage]
})
export class NastroykiPageModule {}
