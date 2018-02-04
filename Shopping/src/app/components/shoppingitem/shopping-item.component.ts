import { Component, OnInit, Input } from "@angular/core";
import { ShoppingItem } from "../../dto/shoppingitem";
import { ShoppingListService } from "../../services/shopping-list.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'shopping-item',
  templateUrl: './shopping-item.component.html'
})
export class ShoppingItemComponent {
  @Input() ShoppingItem: ShoppingItem;

  // reactive form validation item 
  //public shopForm: FormGroup;

  constructor(private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private location: Location) {
    this.ShoppingItem = null;
  }

  ngOnInit() {
    // When route with id loads up get shopping item
    this.getShoppingItem();

  }

  private getShoppingItem() {
    // pull id from route and call shopping list service
    const id = this.route.snapshot.paramMap.get('id');

    this.shoppingListService.getShoppingItem(id).subscribe(r => {
      this.ShoppingItem = r;

  // reactive form validation item 
      //this.shopForm = new FormGroup({
      //  'name': new FormControl(this.ShoppingItem.Name, [
      //    Validators.required,
      //    Validators.minLength(4),
      //  ])
      //});

    });

  }

  // reactive form validation item 
  //get name() { return this.shopForm.get('name'); }

  public submit() {
    alert('save data');
  }

  public back() {
    this.location.back();
  }
}
