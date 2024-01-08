// // src/app/shopping-cart.service.ts

// import { Injectable } from '@angular/core';
// import { ShoppingCartItem } from './shopping-cart-item.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class ShoppingCartService {
//   private items: ShoppingCartItem[] = [];

//   getItems(): ShoppingCartItem[] {
//     return this.items;
//   }

//   addItem(item: ShoppingCartItem) {
//     const existingItem = this.items.find((i) => i.id === item.id);

//     if (existingItem) {
//       existingItem.quantity++;
//     } else {
//       this.items.push({ ...item, quantity: 1 });
//     }
//   }

//   removeItem(itemId: number) {
//     const index = this.items.findIndex((item) => item.id === itemId);

//     if (index !== -1) {
//       const item = this.items[index];

//       if (item.quantity > 1) {
//         item.quantity--;
//       } else {
//         this.items.splice(index, 1);
//       }
//     }
//   }
// }


// src/app/shopping-cart/shopping-cart.service.ts

import { Injectable } from '@angular/core';
import { ShoppingCartItem } from './shopping-cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private items: ShoppingCartItem[] = [];

  getItems(): ShoppingCartItem[] {
    return this.items;
  }

  addItem(item: ShoppingCartItem): void {
    const existingItem = this.items.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getTotalValue(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }
}

