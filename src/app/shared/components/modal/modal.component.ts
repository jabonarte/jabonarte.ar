import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',

  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() showFooter = true;
  @Input() closeOnBackdropClick = true;

  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmModal = new EventEmitter<void>();

  onBackdropClick(event: Event): void {
    if (this.closeOnBackdropClick) {
      this.close();
    }
  }

  close(): void {
    this.closeModal.emit();
  }

  confirm(): void {
    this.confirmModal.emit();
  }
}
