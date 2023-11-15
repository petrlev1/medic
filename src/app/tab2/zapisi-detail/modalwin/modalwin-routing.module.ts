import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalwinPage } from './modalwin.page';

const routes: Routes = [
  {
    path: '',
    component: ModalwinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalwinPageRoutingModule {}
