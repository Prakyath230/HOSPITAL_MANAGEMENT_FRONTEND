import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MedicineService, Medicine } from '../../services/medicine.service';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  searchTerm = '';
  cartCount = 0;

  showMsg = false;
  message = '';

  medicines: Medicine[] = [];

  constructor(
    private cart: CartService,
    private router: Router,
    private medicineService: MedicineService
  ) {
    this.cart.count$.subscribe(c => this.cartCount = c);
  }

  ngOnInit() {
    // load medicines from API
    this.medicineService.getAll().subscribe(data => {
      this.medicines = data.map(m => ({
        ...m,
        id: m.medicineId.toString(), // match CartService id:string
        qty: 1
      }));
    });
  }

  get filteredMedicines() {
    return this.medicines.filter(m =>
      m.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  add(m: any) {
    this.cart.add({ id: m.id, name: m.name, price: m.price, image: m.image }, 1);
    m.qty = this.getQty(m.id);
    this.message = `${m.name} added to cart`;
    this.showSnackbar();
  }

  showSnackbar() {
    this.showMsg = true;
    setTimeout(() => this.showMsg = false, 2000);
  }

  inc(m: any) {
    this.cart.add({ id: m.id, name: m.name, price: m.price, image: m.image }, 1);
    m.qty = this.getQty(m.id);
  }

  dec(m: any) {
    const q = this.getQty(m.id) - 1;
    this.cart.setQty(m.id, q);
    m.qty = this.getQty(m.id);
  }

  goCart() {
    this.router.navigate(['/cart']);
  }

  private getQty(id: string): number {
    let qty = 0;
    this.cart.cart$.subscribe(items => {
      const it = items.find(x => x.id === id);
      qty = it ? it.qty : 0;
    }).unsubscribe();
    return qty;
  }
}
