import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingListComponent } from '../components/shoppinglist/shopping-list.component';
import { ShoppingListService } from '../services/shopping-list.service';
import { CustomHttpService } from '../services/custom-http.service';
import { ShoppingItemComponent } from '../components/shoppingitem/shopping-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent
  ],
  exports: [
    ShoppingListComponent,
    ShoppingItemComponent
  ],  
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [CustomHttpService, ShoppingListService],
})
export class ShoppingModule { }
