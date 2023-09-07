import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5Page } from './tab5.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  },
  {
    path: 'nastroyki',
    loadChildren: () => import('./nastroyki/nastroyki.module').then( m => m.NastroykiPageModule)
  },
  {
    path: 'voprosi',
    loadChildren: () => import('./voprosi/voprosi.module').then( m => m.VoprosiPageModule)
  },
  {
    path: 'zadat-vopros',
    loadChildren: () => import('./zadat-vopros/zadat-vopros.module').then( m => m.ZadatVoprosPageModule)
  },
  {
    path: 'zakazat-test',
    loadChildren: () => import('./zakazat-test/zakazat-test.module').then( m => m.ZakazatTestPageModule)
  },
  {
    path: 'issledovaniya',
    loadChildren: () => import('./issledovaniya/issledovaniya.module').then( m => m.IssledovaniyaPageModule)
  },
  {
    path: 'issledovaniya-detail',
    loadChildren: () => import('./issledovaniya-detail/issledovaniya-detail.module').then( m => m.IssledovaniyaDetailPageModule)
  },
  {
    path: 'lichnie-dannie',
    loadChildren: () => import('./lichnie-dannie/lichnie-dannie.module').then( m => m.LichnieDanniePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule {}
