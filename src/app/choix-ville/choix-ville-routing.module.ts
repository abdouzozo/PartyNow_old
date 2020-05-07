import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixVillePage } from './choix-ville.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixVillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixVillePageRoutingModule {}
