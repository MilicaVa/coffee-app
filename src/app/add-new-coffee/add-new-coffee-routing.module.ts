import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewCoffeePage } from './add-new-coffee.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewCoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewCoffeePageRoutingModule {}
