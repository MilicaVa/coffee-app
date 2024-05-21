import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeInfoPage } from './coffee-info.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeeInfoPageRoutingModule {}
