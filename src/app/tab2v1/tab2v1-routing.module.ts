import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2v1Page } from './tab2v1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2v1PageRoutingModule {}
