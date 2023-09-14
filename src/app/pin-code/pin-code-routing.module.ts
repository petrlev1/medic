import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinCodePage } from './pin-code.page';

const routes: Routes = [
  {
    path: '',
    component: PinCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinCodePageRoutingModule {}
