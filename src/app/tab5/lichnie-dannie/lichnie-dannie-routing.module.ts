import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LichnieDanniePage } from './lichnie-dannie.page';

const routes: Routes = [
  {
    path: '',
    component: LichnieDanniePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LichnieDanniePageRoutingModule {}
