import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },  {
    path: 'zapisi-detail',
    loadChildren: () => import('./zapisi-detail/zapisi-detail.module').then( m => m.ZapisiDetailPageModule)
  },
  {
    path: 'dostavka-preparatovi',
    loadChildren: () => import('./dostavka-preparatovi/dostavka-preparatovi.module').then( m => m.DostavkaPreparatoviPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
