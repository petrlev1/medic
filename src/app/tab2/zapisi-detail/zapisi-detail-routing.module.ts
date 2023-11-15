import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZapisiDetailPage } from './zapisi-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ZapisiDetailPage
  },  {
    path: 'modalwin',
    loadChildren: () => import('./modalwin/modalwin.module').then( m => m.ModalwinPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZapisiDetailPageRoutingModule {}
