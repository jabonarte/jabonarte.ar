import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory } from '../../../../shared/models';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductFiltersComponent } from '../product-filters/product-filters.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, ProductFiltersComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: ProductCategory[] = [];
  selectedCategory: string = 'Todos';
  searchTerm: string = '';
  loading: boolean = false;
  error: string | null = null;
  filteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = null;

    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filterProducts();
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });
  }

  loadCategories(): void {
    this.productsService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      },
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterProducts();
  }

  onClearFilters(): void {
    this.selectedCategory = 'Todos';
    this.searchTerm = '';
    this.filterProducts();
  }

  filterProducts(): void {
    let filtered = this.products;

    // Filtrar por categoría
    if (this.selectedCategory !== 'Todos') {
      filtered = filtered.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    // Filtrar por búsqueda
    if (this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search) ||
          product.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(search)
          )
      );
    }

    this.filteredProducts = filtered;
  }

  onAddToOrder(product: Product): void {
    // Integración con WhatsApp
    const message = `Hola! Me interesa el ${product.name} - $${product.price}. ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }

  onViewDetails(product: Product): void {
    // Navegación a detalles del producto
    console.log('Ver detalles del producto:', product);
    // TODO: Implementar navegación a ProductDetailComponent
  }

  openWhatsApp(): void {
    const message = `Hola! Me interesa consultar sobre productos. ¿Podrías ayudarme?`;
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }
}
