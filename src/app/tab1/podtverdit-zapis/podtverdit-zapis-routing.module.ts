import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodtverditZapisPage } from './podtverdit-zapis.page';

const routes: Routes = [
  {
    path: '',
    component: PodtverditZapisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodtverditZapisPageRoutingModule {}
