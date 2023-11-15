import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },  {
    path: 'date-time',
    loadChildren: () => import('./date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'podtverdit-zapis',
    loadChildren: () => import('./podtverdit-zapis/podtverdit-zapis.module').then( m => m.PodtverditZapisPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
