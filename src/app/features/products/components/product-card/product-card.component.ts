import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
  } from '@angular/core';
import { Product } from '../../../../shared/models';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToOrder = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<Product>();

  onAddToOrder(event: Event): void {
    event.stopPropagation();
    this.addToOrder.emit(this.product);
  }

  onViewDetails(): void {
    this.viewDetails.emit(this.product);
  }

  getRatingStars(rating: number): number[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(1);
    }

    if (hasHalfStar) {
      stars.push(0.5);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(0);
    }

    return stars;
  }

  openWhatsApp(): void {
    const message = `Hola! Me interesa el ${this.product.name} - $${this.product.price}. ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = `https://placehold.co/400x300/DCC7B4/6B4C3B?text=${encodeURIComponent(
      'Imagen no disponible'
    )}`;
  }
}
