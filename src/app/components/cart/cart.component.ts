import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router'; // <-- import Router

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService, private router: Router) {} // <-- inject Router

  ngOnInit() {
    this.cartService.cart$.subscribe(items => this.items = items);
    this.cartService.total$Obs.subscribe(total => this.total = total);
  }

  inc(item: CartItem) {
    this.cartService.setQty(item.medicineId, item.qty + 1);
  }

  dec(item: CartItem) {
    this.cartService.setQty(item.medicineId, item.qty - 1);
  }

  remove(item: CartItem) {
    this.cartService.remove(item.medicineId);
  }

  clear() {
    this.cartService.clear();
  }

  buyNow() {
    if (!this.items.length) {
      alert('Your cart is empty.');
      return;
    }

    const confirmPurchase = confirm(`You bought ${this.items.length} item(s) for a total of ₹${this.total}. Proceed?`);
    if (confirmPurchase) {
      this.cartService.clear();  // Clear cart
      this.router.navigate(['/medicine']); // Navigate to medicine page
    }
  }
}
