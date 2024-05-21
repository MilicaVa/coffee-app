import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCoffeePageRoutingModule } from './edit-coffee-routing.module';

import { EditCoffeePage } from './edit-coffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCoffeePageRoutingModule
  ],
  declarations: [EditCoffeePage]
})
export class EditCoffeePageModule {}
