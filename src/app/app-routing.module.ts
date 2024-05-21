import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'add-new-coffee',
    loadChildren: () => import('./add-new-coffee/add-new-coffee.module').then(m => m.AddNewCoffeePageModule)
  },
  {
    path: 'edit-coffee',
    loadChildren: () => import('./edit-coffee/edit-coffee.module').then(m => m.AddNewCoffeePageModule)
  },
  {
    path: 'coffee-info',
    loadChildren: () => import('./coffee-info/coffee-info.module').then(m => m.AddNewCoffeePageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }