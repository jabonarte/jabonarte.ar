import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonVariant = 'primary' | 'outline' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',

  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;

  @Output() onClick = new EventEmitter<Event>();

  getButtonClasses(): string {
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#9CB1A3] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const variantClasses = {
      primary: 'bg-[#9CB1A3] hover:bg-[#9CB1A3]/90 text-white rounded-full',
      outline:
        'border-2 border-[#9CB1A3] text-[#9CB1A3] hover:bg-[#9CB1A3]/10 rounded-full',
      secondary:
        'bg-[#DCC7B4] hover:bg-[#DCC7B4]/90 text-[#6B4C3B] rounded-full',
      ghost: 'text-[#6B4C3B] hover:bg-[#6B4C3B]/10 rounded-full',
    };

    const widthClass = this.fullWidth ? 'w-full' : '';

    return `${baseClasses} ${sizeClasses[this.size]} ${
      variantClasses[this.variant]
    } ${widthClass}`;
  }
}
