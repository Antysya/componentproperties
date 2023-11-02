import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent {
  products: { name: string, price: number }[] = [
    { name: 'Книга', price: 1000 },
    { name: 'Тетрадь', price: 200 },
    { name: 'Блокнот', price: 800 }
  ];
}
