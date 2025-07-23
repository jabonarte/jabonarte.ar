import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'skin-test',
    loadComponent: () =>
      import('./features/skin-test/components/skin-test.component').then(
        (m) => m.SkinTestComponent
      ),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./features/products/components/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
];
