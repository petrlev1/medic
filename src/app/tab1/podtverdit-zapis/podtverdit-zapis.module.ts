import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodtverditZapisPageRoutingModule } from './podtverdit-zapis-routing.module';

import { PodtverditZapisPage } from './podtverdit-zapis.page';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodtverditZapisPageRoutingModule,
    	HttpClientModule
  ],
	   providers: [],
  declarations: [PodtverditZapisPage]
})
export class PodtverditZapisPageModule {
  
  
  
  
  
  
  }
