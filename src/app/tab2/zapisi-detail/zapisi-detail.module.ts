import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZapisiDetailPageRoutingModule } from './zapisi-detail-routing.module';

import { ZapisiDetailPage } from './zapisi-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZapisiDetailPageRoutingModule
  ],
  declarations: [ZapisiDetailPage]
})
export class ZapisiDetailPageModule {}
