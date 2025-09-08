import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent {
  searchTerm = '';
  cartCount = 0;

  showMsg = false;
  message = '';

  constructor(private cart: CartService, private router: Router) {
    this.cart.count$.subscribe(c => this.cartCount = c);
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
    setTimeout(() => this.showMsg = false, 2000); // hide after 2 seconds
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

  medicines = [
    {
      id: '1',
      name: 'Paracetamol',
      description: 'Pain reliever and fever reducer',
      price: 25,
      rating: 4.5,
      qty: 1,
      image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
      isInCart: false
    },
    {
      id: '2',
      name: 'Ibuprofen',
      description: 'Used to reduce fever and treat pain',
      price: 40,
      rating: 4.2,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
      isInCart: false
    },
    {
      id: '3',
      name: 'Amoxicillin',
      description: 'Antibiotic for bacterial infections',
      price: 70,
      rating: 4.8,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1522335579687-9c718c5184d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
      isInCart: false
    },
    {
      id: '4',
      name: 'Cetirizine',
      description: 'Relieves allergy symptoms',
      price: 20,
      rating: 4.3,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
      isInCart: false
    },
    {
      id: '5',
      name: 'Aspirin',
      description: 'Used to reduce pain and inflammation',
      price: 30,
      rating: 4.4,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1562243061-204550d8a2c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGljaW5lfGVufDB8fDB8fHww',
      isInCart: false
    },
    {
      id: '6',
      name: 'Azithromycin',
      description: 'Antibiotic for throat infections',
      price: 90,
      rating: 4.7,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
      isInCart: false
    },
    {
      id: '7',
      name: 'Metformin',
      description: 'Controls high blood sugar for type 2 diabetes',
      price: 55,
      rating: 4.6,
      qty: 1,
      image: 'https://plus.unsplash.com/premium_photo-1673455853173-bcbb4f1292aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGlsbHxlbnwwfHwwfHx8MA%3D%3D',
      isInCart: false
    },
    {
      id: '8',
      name: 'Pantoprazole',
      description: 'Reduces stomach acid',
      price: 60,
      rating: 4.4,
      qty: 1,
      image: 'https://plus.unsplash.com/premium_photo-1668605108596-2aba740e010a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpbGx8ZW58MHx8MHx8fDA%3D',
      isInCart: false
    },
    {
      id: '1',
      name: 'Loratadine',
      description: 'Antihistamine for allergies',
      price: 25,
      rating: 4.1,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isInCart: false
    },
    {
      id: '9',
      name: 'Dolo 650',
      description: 'Effective for fever and body pain',
      price: 30,
      rating: 4.9,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1625144094117-6612bbbe0a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBpbGx8ZW58MHx8MHx8fDA%3D',
      isInCart: false
    },
    {
      id: '10',
      name: 'Cymbalta',
      description: 'General anxiety disorder treatment',
      price: 130,
      rating: 4.9,
      qty: 1,
      image: 'https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.webp?s=2048x2048&w=is&k=20&c=VuuVtYE28QaiqeNE4svkBV1PJyNDVYwgurL7xl8PdCQ=',
      isInCart: false
    },
    {
      id: '11',
      name: 'Ubrelvy',
      description: 'Treatment for migraine attacks',
      price: 80,
      rating: 4.9,
      qty: 1,
      image: 'https://media.istockphoto.com/id/1342010434/vector/pills.webp?s=2048x2048&w=is&k=20&c=cgx1wyh6KFOr0YWiTwZzIBGa-Rv_QWbOGQEUVKM3ETk=',
      isInCart: false
    }
  ];
}
