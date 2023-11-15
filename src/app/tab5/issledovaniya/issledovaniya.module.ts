import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssledovaniyaPageRoutingModule } from './issledovaniya-routing.module';

import { IssledovaniyaPage } from './issledovaniya.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IssledovaniyaPageRoutingModule,
    	HttpClientModule
  ],
   providers: [],
  declarations: [IssledovaniyaPage]
})
export class IssledovaniyaPageModule {}
