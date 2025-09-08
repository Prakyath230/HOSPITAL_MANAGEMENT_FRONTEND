import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: CartItem[] = [];   // all items in cart
  total: number = 0;        // total price

  // make service public so template can access it
  constructor(public cartService: CartService) {

    // keep items array updated whenever cart changes
    this.cartService.cart$.subscribe(cartItems => {
      this.items = cartItems;
    });

    // keep total updated whenever total changes
    this.cartService.total$.subscribe(cartTotal => {
      this.total = cartTotal;
    });
  }

  // increase quantity
  inc(item: CartItem) {
    this.cartService.setQty(item.id, item.qty + 1);
  }

  // decrease quantity
  dec(item: CartItem) {
    this.cartService.setQty(item.id, item.qty - 1);
  }

  // remove one item completely
  remove(item: CartItem) {
    this.cartService.remove(item.id);
  }

  // clear full cart
  clear() {
    this.cartService.clear();
  }
  buyNow() {
  if (this.items.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert(`You bought ${this.items.length} item(s) for a total of ₹${this.total}`);
}

}
