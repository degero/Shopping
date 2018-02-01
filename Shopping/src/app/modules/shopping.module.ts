import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingListComponent } from '../components/shoppinglist/shopping-list.component';
import { ShoppingListService } from '../services/shopping-list.service';
import { CustomHttpService } from '../services/custom-http.service';

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  exports: [
    ShoppingListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [CustomHttpService, ShoppingListService],
})
export class ShoppingModule { }
