import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssledovaniyaDetailPageRoutingModule } from './issledovaniya-detail-routing.module';

import { IssledovaniyaDetailPage } from './issledovaniya-detail.page';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IssledovaniyaDetailPageRoutingModule,
    HttpClientModule
  ],
  declarations: [IssledovaniyaDetailPage]
})
export class IssledovaniyaDetailPageModule {}
