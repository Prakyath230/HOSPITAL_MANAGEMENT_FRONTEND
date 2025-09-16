import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: CartItem[] = [];
  total = 0;

  constructor(public cartService: CartService) {
    // subscribe to service streams
    this.cartService.cart$.subscribe(items => this.items = items);
    this.cartService.total$.subscribe(total => this.total = total);
  }

  inc(item: CartItem) {
    this.cartService.setQty(item.id, item.qty + 1);
  }

  dec(item: CartItem) {
    this.cartService.setQty(item.id, item.qty - 1);
  }

  remove(item: CartItem) {
    this.cartService.remove(item.id);
  }

  clear() {
    this.cartService.clear();
  }

  buyNow() {
    if (!this.items.length) {
      alert('Your cart is empty.');
      return;
    }
    alert(`You bought ${this.items.length} item(s) for a total of ₹${this.total}`);
  }
}
