import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoprosiPage } from './voprosi.page';

const routes: Routes = [
  {
    path: '',
    component: VoprosiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoprosiPageRoutingModule {}
