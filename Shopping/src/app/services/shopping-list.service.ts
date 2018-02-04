import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { Constants } from '../utility/constants';
import { ShoppingItem } from '../dto/shoppingitem';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class ShoppingListService {

  constructor(private customHttp: CustomHttpService) {

  }

  public getShoppingList():Observable<ShoppingItem[]> {
    return this.customHttp.get(Constants.URL_ShoppingList_List) as Observable<ShoppingItem[]>;
  }

  public getShoppingItem(id: string):Observable<ShoppingItem> {
    return this.customHttp.get(Constants.URL_ShoppingList_List + "/" + id ) as Observable<ShoppingItem>;
  }
}
