import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Jabón de Caléndula y Miel',
      description:
        'Ideal para pieles sensibles y secas. Calma irritaciones y nutre profundamente.',
      price: 1200,
      category: 'Facial',
      image: `https://placehold.co/400x300/9CB1A3/6B4C3B?text=${encodeURIComponent(
        'Jabón de Caléndula y Miel'
      )}`,
      rating: 4.8,
      reviews: 45,
      ingredients: [
        'Caléndula',
        'Miel orgánica',
        'Aceite de oliva',
        'Aceite de coco',
      ],
      benefits: [
        'Calma irritaciones',
        'Nutre la piel',
        'Antioxidante',
        'Hidratante',
      ],
      inStock: true,
      weight: '100g',
    },
    {
      id: 2,
      name: 'Jabón de Lavanda y Avena',
      description:
        'Relajante y exfoliante suave. Perfecto para pieles mixtas y normales.',
      price: 1100,
      category: 'Facial',
      image: `https://placehold.co/400x300/DCC7B4/6B4C3B?text=${encodeURIComponent(
        'Jabón de Lavanda y Avena'
      )}`,
      rating: 4.6,
      reviews: 38,
      ingredients: [
        'Lavanda',
        'Avena coloidal',
        'Aceite de almendras',
        'Aceite de coco',
      ],
      benefits: [
        'Relajante',
        'Exfoliante suave',
        'Equilibra grasa',
        'Calma la piel',
      ],
      inStock: true,
      weight: '100g',
    },
    {
      id: 3,
      name: 'Jabón de Romero y Limón',
      description:
        'Energizante y purificante. Ideal para pieles grasas y con acné.',
      price: 1150,
      category: 'Facial',
      image: `https://placehold.co/400x300/9CB1A3/6B4C3B?text=${encodeURIComponent(
        'Jabón de Romero y Limón'
      )}`,
      rating: 4.7,
      reviews: 52,
      ingredients: [
        'Romero',
        'Limón',
        'Aceite de árbol de té',
        'Aceite de coco',
      ],
      benefits: [
        'Purificante',
        'Antibacterial',
        'Controla grasa',
        'Energizante',
      ],
      inStock: true,
      weight: '100g',
    },
    {
      id: 4,
      name: 'Jabón de Rosa y Aloe',
      description:
        'Hidratante y regenerador. Perfecto para pieles maduras y secas.',
      price: 1300,
      category: 'Facial',
      image: `https://placehold.co/400x300/DCC7B4/6B4C3B?text=${encodeURIComponent(
        'Jabón de Rosa y Aloe'
      )}`,
      rating: 4.9,
      reviews: 41,
      ingredients: [
        'Pétalos de rosa',
        'Aloe vera',
        'Aceite de rosa mosqueta',
        'Aceite de coco',
      ],
      benefits: [
        'Hidratante',
        'Regenerador',
        'Antienvejecimiento',
        'Calma la piel',
      ],
      inStock: true,
      weight: '100g',
    },
    {
      id: 5,
      name: 'Jabón Corporal de Menta y Eucalipto',
      description: 'Refrescante y estimulante. Ideal para duchas matutinas.',
      price: 950,
      category: 'Corporal',
      image: `https://placehold.co/400x300/9CB1A3/6B4C3B?text=${encodeURIComponent(
        'Jabón Corporal de Menta y Eucalipto'
      )}`,
      rating: 4.5,
      reviews: 29,
      ingredients: ['Menta', 'Eucalipto', 'Aceite de coco', 'Aceite de oliva'],
      benefits: [
        'Refrescante',
        'Estimulante',
        'Desodorante natural',
        'Energizante',
      ],
      inStock: true,
      weight: '150g',
    },
    {
      id: 6,
      name: 'Jabón Corporal de Vainilla y Canela',
      description: 'Aromático y nutritivo. Perfecto para pieles secas.',
      price: 1000,
      category: 'Corporal',
      image: `https://placehold.co/400x300/DCC7B4/6B4C3B?text=${encodeURIComponent(
        'Jabón Corporal de Vainilla y Canela'
      )}`,
      rating: 4.4,
      reviews: 33,
      ingredients: [
        'Vainilla',
        'Canela',
        'Aceite de almendras',
        'Aceite de coco',
      ],
      benefits: ['Aromático', 'Nutritivo', 'Hidratante', 'Relajante'],
      inStock: true,
      weight: '150g',
    },
    {
      id: 7,
      name: 'Jabón de Manos de Limón y Salvia',
      description: 'Antibacterial y refrescante. Ideal para uso frecuente.',
      price: 800,
      category: 'Manos',
      image: `https://placehold.co/400x300/9CB1A3/6B4C3B?text=${encodeURIComponent(
        'Jabón de Manos de Limón y Salvia'
      )}`,
      rating: 4.6,
      reviews: 67,
      ingredients: [
        'Limón',
        'Salvia',
        'Aceite de árbol de té',
        'Aceite de coco',
      ],
      benefits: ['Antibacterial', 'Refrescante', 'Purificante', 'Hidratante'],
      inStock: true,
      weight: '80g',
    },
    {
      id: 8,
      name: 'Jabón de Manos de Lavanda y Miel',
      description: 'Suave y nutritivo. Perfecto para pieles sensibles.',
      price: 850,
      category: 'Manos',
      image: `https://placehold.co/400x300/DCC7B4/6B4C3B?text=${encodeURIComponent(
        'Jabón de Manos de Lavanda y Miel'
      )}`,
      rating: 4.7,
      reviews: 44,
      ingredients: [
        'Lavanda',
        'Miel orgánica',
        'Aceite de almendras',
        'Aceite de coco',
      ],
      benefits: ['Suave', 'Nutritivo', 'Calma la piel', 'Hidratante'],
      inStock: true,
      weight: '80g',
    },
  ];

  private categories: ProductCategory[] = [
    { id: 1, name: 'Todos', description: 'Todos los productos' },
    { id: 2, name: 'Facial', description: 'Jabones para el rostro' },
    { id: 3, name: 'Corporal', description: 'Jabones para el cuerpo' },
    { id: 4, name: 'Manos', description: 'Jabones para las manos' },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(500));
  }

  getCategories(): Observable<ProductCategory[]> {
    return of(this.categories).pipe(delay(300));
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product).pipe(delay(200));
  }

  searchProducts(query: string): Observable<Product[]> {
    const filtered = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query.toLowerCase())
        )
    );
    return of(filtered).pipe(delay(300));
  }

  filterByCategory(category: string): Observable<Product[]> {
    if (category === 'Todos') {
      return of(this.products);
    }
    const filtered = this.products.filter(
      (product) => product.category === category
    );
    return of(filtered).pipe(delay(300));
  }
}
