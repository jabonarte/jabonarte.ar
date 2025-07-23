import { AboutComponent } from './features/home/components/about/about.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConditionsComponent } from './features/conditions/components/conditions/conditions.component';
import { ContactComponent } from './features/contact/components/contact/contact.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { PhilosophyComponent } from './features/philosophy/components/philosophy/philosophy.component';
import { ProductsComponent } from './features/products/components/products/products.component';
import { RoutinesComponent } from './features/routines/components/routines/routines.component';
import { SkinTestComponent } from './features/skin-test/components/skin-test.component';
import { SkinTypesComponent } from './features/skin-types/components/skin-types/skin-types.component';

@Component({
  selector: 'app-root',

  imports: [
    CommonModule,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkinTestComponent,
    ProductsComponent,
    SkinTypesComponent,
    ConditionsComponent,
    RoutinesComponent,
    PhilosophyComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'jabon-arte';
  mobileMenuOpen = false; // Added for header
  selectedCategory = 'todos'; // Added for products

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  filterProducts(category: string): void {
    this.selectedCategory = category;
  }

  addToOrder(productName: string, price: number): void {
    console.log(`Producto agregado: ${productName} - $${price}`);
    // Aquí se implementaría la lógica del carrito
  }
}
