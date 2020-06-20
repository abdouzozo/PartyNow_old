import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChercherSoireePage } from './chercher-soiree.page';

const routes: Routes = [
  {
    path: '',
    component: ChercherSoireePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChercherSoireePageRoutingModule {}
