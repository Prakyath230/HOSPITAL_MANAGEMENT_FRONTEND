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

  medicines: (Medicine & { qty: number })[] = [];

  constructor(
    private cart: CartService,
    private router: Router,
    private medicineService: MedicineService
  ) {
    this.cart.countObs$.subscribe(c => this.cartCount = c);
  }

  ngOnInit() {
    this.medicineService.getAll().subscribe(data => {
      this.medicines = data.map(m => ({
        ...m,
        qty: 1
      }));
    });
  }

  get filteredMedicines() {
    return this.medicines.filter(m =>
      m.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  add(m: Medicine & { qty: number }) {
    this.cart.add(m.medicineId, 1);
    m.qty = this.getQty(m.medicineId);
    this.message = `${m.name} added to cart`;
    this.showSnackbar();
  }

  showSnackbar() {
    this.showMsg = true;
    setTimeout(() => this.showMsg = false, 2000);
  }

  inc(m: Medicine & { qty: number }) {
    this.cart.add(m.medicineId, 1);
    m.qty = this.getQty(m.medicineId);
  }

  dec(m: Medicine & { qty: number }) {
    const q = this.getQty(m.medicineId) - 1;
    this.cart.setQty(m.medicineId, q);
    m.qty = this.getQty(m.medicineId);
  }

  goCart() {
    this.router.navigate(['/cart']);
  }

  private getQty(medicineId: number): number {
    let qty = 0;
    this.cart.cart$.subscribe(items => {
      const it = items.find(x => x.medicineId === medicineId);
      qty = it ? it.qty : 0;
    }).unsubscribe();
    return qty;
  }
}
