import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssledovaniyaPageRoutingModule } from './issledovaniya-routing.module';

import { IssledovaniyaPage } from './issledovaniya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IssledovaniyaPageRoutingModule
  ],
  declarations: [IssledovaniyaPage]
})
export class IssledovaniyaPageModule {}
