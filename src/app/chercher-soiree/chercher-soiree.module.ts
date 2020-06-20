import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChercherSoireePageRoutingModule } from './chercher-soiree-routing.module';

import { ChercherSoireePage } from './chercher-soiree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChercherSoireePageRoutingModule
  ],
  declarations: [ChercherSoireePage]
})
export class ChercherSoireePageModule {}
