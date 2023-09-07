import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZapisiDetailPage } from './zapisi-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ZapisiDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZapisiDetailPageRoutingModule {}
