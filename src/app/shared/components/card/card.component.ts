import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type CardVariant = 'default' | 'elevated' | 'outlined';

@Component({
  selector: 'app-card',

  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() variant: CardVariant = 'default';
  @Input() clickable = false;
  @Input() hover = true;

  @Output() onClick = new EventEmitter<Event>();

  getCardClasses(): string {
    const baseClasses = 'bg-white rounded-lg transition-all duration-200';

    const variantClasses = {
      default: 'border border-[#DCC7B4]/20',
      elevated: 'shadow-lg hover:shadow-xl',
      outlined: 'border-2 border-[#DCC7B4]',
    };

    const hoverClass =
      this.hover && this.clickable ? 'hover:scale-105 hover:shadow-lg' : '';

    return `${baseClasses} ${variantClasses[this.variant]} ${hoverClass}`;
  }
}
