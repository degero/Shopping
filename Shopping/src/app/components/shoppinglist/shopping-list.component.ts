import { Component } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ShoppingItem } from '../../dto/shoppingitem';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {

  public Items: ShoppingItem[];

  constructor(private shoppingListService: ShoppingListService) {
    this.Items = [];
  }

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe(r => {
      this.Items = r;
    })
  }
}
