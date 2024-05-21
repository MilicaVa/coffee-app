import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCoffeePage } from './edit-coffee.page';

const routes: Routes = [
  {
    path: '',
    component: EditCoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCoffeePageRoutingModule {}
