import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shoppinglist/shopping-list.component';
import { ShoppingItemComponent } from './components/shoppingitem/shopping-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'configuration',
    loadChildren: 'app/configuration/configuration.module#ConfigurationModule'
  },
  { path: 'shoppingitem/:id', component: ShoppingItemComponent },
  { path: 'shoppinglist', component: ShoppingListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
