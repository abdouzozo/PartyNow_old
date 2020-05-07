import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixVillePageRoutingModule } from './choix-ville-routing.module';

import { ChoixVillePage } from './choix-ville.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixVillePageRoutingModule
  ],
  declarations: [ChoixVillePage]
})
export class ChoixVillePageModule {}
