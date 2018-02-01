import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shoppinglist/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/shoppinglist', pathMatch: 'full' },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'shoppinglist', component: ShoppingListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
