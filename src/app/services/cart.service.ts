import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface CartItem {
  medicineId: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = '/api/cart';
  private items$ = new BehaviorSubject<CartItem[]>([]);
  private count$ = new BehaviorSubject<number>(0);
  private total$ = new BehaviorSubject<number>(0);

  cart$ = this.items$.asObservable();
  countObs$ = this.count$.asObservable();
  total$Obs = this.total$.asObservable();

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  private loadCart() {
  this.http.get<any[]>(this.baseUrl).subscribe(items => {
    const cartItems: CartItem[] = items.map(json => ({
      medicineId: json.medicineId,
      name: json.name,
      image: json.imageUrl,
      qty: json.units,
      price: json.totalPrice / json.units
    }));
    this.items$.next(cartItems);
    this.count$.next(this.count(cartItems));
    this.total$.next(this.total(cartItems));
  });
}



  add(medicineId: number, units: number = 1) {
    const params = new HttpParams().set('units', units.toString());
    this.http.post(this.baseUrl + `/medicine/${medicineId}`, {}, { params })
      .subscribe(() => this.loadCart());
  }

  setQty(medicineId: number, qty: number) {
    if (qty <= 0) {
      this.remove(medicineId);
      return;
    }
    const params = new HttpParams().set('units', qty.toString());
    this.http.put(this.baseUrl + `/medicine/${medicineId}`, {}, { params })
      .subscribe(() => this.loadCart());
  }

  remove(medicineId: number) {
    this.http.delete(this.baseUrl + `/medicine/${medicineId}`)
      .subscribe(() => this.loadCart());
  }

  clear() {
    this.http.delete(this.baseUrl)
      .subscribe(() => this.loadCart());
  }

  private count(items: CartItem[]): number {
    return items.reduce((s, x) => s + x.qty, 0);
  }

  private total(items: CartItem[]): number {
    return items.reduce((s, x) => s + x.qty * x.price, 0);
  }
}
