import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffeeInfoPageRoutingModule } from './coffee-info-routing.module';

import {CoffeeInfoPage } from './coffee-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffeeInfoPageRoutingModule
  ],
  declarations: [CoffeeInfoPage]
})
export class CoffeeInfoPageModule {}
