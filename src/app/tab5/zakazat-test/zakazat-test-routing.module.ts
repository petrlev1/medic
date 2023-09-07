import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZakazatTestPage } from './zakazat-test.page';

const routes: Routes = [
  {
    path: '',
    component: ZakazatTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZakazatTestPageRoutingModule {}
