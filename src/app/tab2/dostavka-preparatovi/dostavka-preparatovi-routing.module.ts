import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DostavkaPreparatoviPage } from './dostavka-preparatovi.page';

const routes: Routes = [
  {
    path: '',
    component: DostavkaPreparatoviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DostavkaPreparatoviPageRoutingModule {}
