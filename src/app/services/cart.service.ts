import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private key = 'cart';
  private items: CartItem[] = this.load();
  private items$ = new BehaviorSubject<CartItem[]>(this.items);

  cart$ = this.items$.asObservable();
  count$ = new BehaviorSubject<number>(this.count());
  total$ = new BehaviorSubject<number>(this.total());

  add(item: Omit<CartItem, 'qty'>, qty: number = 1) {
    const i = this.items.findIndex(x => x.id === item.id);
    if (i >= 0) {
      this.items[i].qty += qty;
    } else {
      this.items.push({ ...item, qty });
    }
    this.sync();
  }

  setQty(id: string, qty: number) {
    const it = this.items.find(x => x.id === id);
    if (!it) return;
    it.qty = Math.max(0, qty);
    if (it.qty === 0) this.items = this.items.filter(x => x.id !== id);
    this.sync();
  }

  remove(id: string) {
    this.items = this.items.filter(x => x.id !== id);
    this.sync();
  }

  clear() {
    this.items = [];
    this.sync();
  }

  private sync() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
    this.items$.next([...this.items]);
    this.count$.next(this.count());
    this.total$.next(this.total());
  }

  private load(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem(this.key) || '[]');
    } catch {
      return [];
    }
  }

  private count(): number {
    return this.items.reduce((s, x) => s + x.qty, 0);
  }

  private total(): number {
    return this.items.reduce((s, x) => s + x.qty * x.price, 0);
  }
}