// // src/app/shopping-cart.component.ts

// import { Component } from '@angular/core';
// import { ShoppingCartService } from './shopping-cart.service';
// import { ShoppingCartItem } from './shopping-cart-item.model';

// @Component({
//   selector: 'app-shopping-cart',
//   templateUrl: './shopping-cart.component.html', // Reference to the external template file
//   styleUrls: ['./shopping-cart.component.css'], // Reference to the external styles file
// })
// export class ShoppingCartComponent {
//   items: ShoppingCartItem[] = [];
//   newItemName: string = '';
//   newItemPrice: number = 0;

//   constructor(private shoppingCartService: ShoppingCartService) {
//     this.items = this.shoppingCartService.getItems();
//   }

//   addItem() {
//     if (this.newItemName && this.newItemPrice > 0) {
//       const newItem: ShoppingCartItem = {
//         id: Date.now(),
//         name: this.newItemName,
//         price: this.newItemPrice,
//         quantity: 1,
//       };

//       this.shoppingCartService.addItem(newItem);
//       this.items = this.shoppingCartService.getItems();

//       // Reset input fields after adding item
//       this.newItemName = '';
//       this.newItemPrice = 0;
//     }
//   }

//   removeItem(itemId: number) {
//     this.shoppingCartService.removeItem(itemId);
//     this.items = this.shoppingCartService.getItems();
//   }
// }

// src/app/shopping-cart/shopping-cart.component.ts

import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItem } from './shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html', // Reference to the external template file
   styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  items: ShoppingCartItem[] = [];
  newItemName: string = '';
  newItemPrice: number = 0;
  newItemQuantity: number = 1;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.items = this.shoppingCartService.getItems();
  }

  addItem(): void {
    if (this.newItemName && this.newItemPrice > 0 && this.newItemQuantity > 0) {
      const newItem: ShoppingCartItem = {
        id: Date.now(),
        name: this.newItemName,
        price: this.newItemPrice,
        quantity: this.newItemQuantity,
      };

      this.shoppingCartService.addItem(newItem);
      this.items = this.shoppingCartService.getItems();

      // Reset input fields after adding item
      this.newItemName = '';
      this.newItemPrice = 0;
      this.newItemQuantity = 1;
    }
  }

  getTotalValue(): number {
    return this.shoppingCartService.getTotalValue();
  }

  removeItem(itemId: number): void {
    this.shoppingCartService.removeItem(itemId);
    this.items = this.shoppingCartService.getItems();
  }
}
