import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingModule } from './modules/shopping.module';
import { ShoppingListComponent } from './components/shoppinglist/shopping-list.component';
import { ShoppingItemComponent } from './components/shoppingitem/shopping-item.component';
import { CustomHttpService } from './services/custom-http.service';
import { ShoppingListService } from './services/shopping-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingItemComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    //ShoppingModule
  ],
  providers: [CustomHttpService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
