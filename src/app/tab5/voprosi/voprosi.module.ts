import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoprosiPageRoutingModule } from './voprosi-routing.module';

import { VoprosiPage } from './voprosi.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoprosiPageRoutingModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [VoprosiPage]
})
export class VoprosiPageModule {}
