import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NastroykiPage } from './nastroyki.page';

const routes: Routes = [
  {
    path: '',
    component: NastroykiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NastroykiPageRoutingModule {}
