import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewCoffeePageRoutingModule } from './add-new-coffee-routing.module';

import { AddNewCoffeePage } from './add-new-coffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewCoffeePageRoutingModule
  ],
  declarations: [AddNewCoffeePage]
})
export class AddNewCoffeePageModule {}
