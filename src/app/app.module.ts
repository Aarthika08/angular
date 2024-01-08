// src/app/app.module.ts

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component'; // Import the AppComponent
// import { ShoppingCartComponent } from './shopping-cart.component';

// @NgModule({
//   declarations: [AppComponent, ShoppingCartComponent], // Include AppComponent in declarations
//   imports: [BrowserModule, FormsModule],
//   bootstrap: [AppComponent], // Bootstrap the AppComponent, not the ShoppingCartComponent
// })
// export class AppModule {}

// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from './shopping-cart.service'; // Import the service

@NgModule({
  declarations: [AppComponent, ShoppingCartComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ShoppingCartService], // Provide the service
  bootstrap: [AppComponent],
})
export class AppModule {}
