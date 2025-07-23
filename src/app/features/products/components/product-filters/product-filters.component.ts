import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCategory } from '../../../../shared/models';

@Component({
  selector: 'app-product-filters',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss',
})
export class ProductFiltersComponent {
  @Input() categories: ProductCategory[] = [];
  @Input() selectedCategory: string = 'Todos';
  @Input() searchTerm: string = '';
  @Input() loading: boolean = false;

  @Output() categoryChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() clearFilters = new EventEmitter<void>();

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    this.categoryChange.emit(target.value);
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.searchChange.emit(target.value);
  }

  onClearFilters(): void {
    this.selectedCategory = 'Todos';
    this.searchTerm = '';
    this.clearFilters.emit();
  }

  onCategoryChangeTodos(): void {
    this.selectedCategory = 'Todos';
    this.categoryChange.emit('Todos');
  }

  onSearchChangeClear(): void {
    this.searchTerm = '';
    this.searchChange.emit('');
  }

  hasActiveFilters(): boolean {
    return this.selectedCategory !== 'Todos' || this.searchTerm.trim() !== '';
  }
}
