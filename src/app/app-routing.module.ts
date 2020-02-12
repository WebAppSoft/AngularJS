import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
  // {
  //   path: 'shopping-list',
  //   loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  // },
  // {
  //   path: 'auth',
  //   loadChildren: './auth/auth.module#AuthModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
