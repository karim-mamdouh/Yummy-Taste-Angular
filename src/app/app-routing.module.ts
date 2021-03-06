//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //Default route
  { path: '', component: HomeComponent },
  //Auth route
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth-module/auth-module.module').then(
        (module) => module.AuthModuleModule
      ),
  },
  //Food route
  {
    path: 'food',
    loadChildren: () =>
      import('./modules/food-module/food-module.module').then(
        (module) => module.FoodModuleModule
      ),
  },
  //Wrong path route
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
