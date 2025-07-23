import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-loading-spinner',

  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() text = 'Cargando...';
  @Input() showText = true;

  get sizeClass(): string {
    const sizeClasses = {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-8',
    };
    return sizeClasses[this.size];
  }
}
