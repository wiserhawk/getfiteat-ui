import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { FoodItemService } from '../../../service/food-item.service';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
  
  @Input() itemId;
  @Input() name;
  @Input() price;
  @Input() netPrice;
  @Input() image;
  @Input() category;
  @Input() type;
  @Input() quantity;
  
  private cartItems = [];

  itemImageRootPath: string;

  constructor(private _cartService: CartService, private _foodItemService: FoodItemService) { }

  ngOnInit() {
    this.loadItemImagePath();
    this.loadItemsFromCart();
  }

  private loadItemImagePath() {
    this.itemImageRootPath = this._foodItemService.getItemImageRootPath();
  }

  private loadItemsFromCart() {
    this.cartItems = this._cartService.loadCartDetailsFromLocalStorage();
    if (this.cartItems) {
      this.cartItems.forEach(element => {
        if (this.itemId === element.itemId) {
          this.quantity = element.quantity;
        }
      });
    }
  }
  

}
