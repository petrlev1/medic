import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssledovaniyaPage } from './issledovaniya.page';

const routes: Routes = [
  {
    path: '',
    component: IssledovaniyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssledovaniyaPageRoutingModule {}
