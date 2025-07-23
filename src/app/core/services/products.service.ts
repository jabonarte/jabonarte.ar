import { catchError, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
}

export interface ProductFilter {
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price' | 'rating' | 'name';
  sortOrder?: 'asc' | 'desc';
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Jabón de Avena y Miel',
      description: 'Limpieza suave para piel sensible',
      price: 850,
      category: 'jabones',
      image: 'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Jabon+Avena+Miel',
      rating: 4.8,
      reviews: 24,
      inStock: true,
      tags: ['natural', 'suave', 'sensibilidad'],
    },
    {
      id: '2',
      name: 'Sérum de Vitamina C',
      description: 'Antioxidante y luminosidad',
      price: 1200,
      category: 'serums',
      image: 'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Serum+Vitamina+C',
      rating: 4.9,
      reviews: 18,
      inStock: true,
      tags: ['antioxidante', 'luminosidad', 'vitamina-c'],
    },
    {
      id: '3',
      name: 'Aceite de Rosa Mosqueta',
      description: 'Regeneración y anti-edad',
      price: 980,
      category: 'aceites',
      image:
        'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Aceite+Rosa+Mosqueta',
      rating: 4.7,
      reviews: 31,
      inStock: true,
      tags: ['regeneración', 'anti-edad', 'rosa-mosqueta'],
    },
    {
      id: '4',
      name: 'Champú Sólido Lavanda',
      description: 'Cabello graso y caspa',
      price: 750,
      category: 'champus',
      image:
        'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Champu+Solido+Lavanda',
      rating: 4.6,
      reviews: 15,
      inStock: true,
      tags: ['cabello-graso', 'caspa', 'lavanda'],
    },
    {
      id: '5',
      name: 'Crema Hidratante Aloe',
      description: 'Hidratación profunda',
      price: 1100,
      category: 'cremas',
      image:
        'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Crema+Hidratante+Aloe',
      rating: 4.8,
      reviews: 22,
      inStock: true,
      tags: ['hidratación', 'aloe', 'profunda'],
    },
    {
      id: '6',
      name: 'Jabón Carbón Activado',
      description: 'Piel grasa y acné',
      price: 900,
      category: 'jabones',
      image:
        'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Jabon+Carbon+Activado',
      rating: 4.5,
      reviews: 19,
      inStock: true,
      tags: ['piel-grasa', 'acné', 'carbón'],
    },
    {
      id: '7',
      name: 'Sérum Ácido Hialurónico',
      description: 'Hidratación intensa',
      price: 1350,
      category: 'serums',
      image:
        'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Serum+Acido+Hialuronico',
      rating: 4.9,
      reviews: 28,
      inStock: true,
      tags: ['hidratación', 'ácido-hialurónico', 'intensa'],
    },
    {
      id: '8',
      name: 'Aceite de Jojoba',
      description: 'Equilibrio natural',
      price: 890,
      category: 'aceites',
      image: 'https://placehold.co/400x300/DCC7B4/6B4C3B?text=Aceite+Jojoba',
      rating: 4.6,
      reviews: 16,
      inStock: true,
      tags: ['equilibrio', 'jojoba', 'natural'],
    },
  ];

  constructor(private http: HttpClient) {}

  /**
   * Get all products
   */
  getProducts(): Observable<Product[]> {
    return of(this.mockProducts).pipe(
      delay(500), // Simular delay de red
      catchError((error) => {
        console.error('Error fetching products:', error);
        return of([]);
      })
    );
  }

  /**
   * Get product by ID
   */
  getProductById(id: string): Observable<Product | null> {
    const product = this.mockProducts.find((p) => p.id === id);
    return of(product || null).pipe(
      delay(300),
      catchError((error) => {
        console.error('Error fetching product:', error);
        return of(null);
      })
    );
  }

  /**
   * Get products by category
   */
  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.mockProducts.filter(
      (p) => p.category === category
    );
    return of(filteredProducts).pipe(
      delay(400),
      catchError((error) => {
        console.error('Error fetching products by category:', error);
        return of([]);
      })
    );
  }

  /**
   * Search products
   */
  searchProducts(query: string): Observable<Product[]> {
    const searchTerm = query.toLowerCase();
    const filteredProducts = this.mockProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
    return of(filteredProducts).pipe(
      delay(300),
      catchError((error) => {
        console.error('Error searching products:', error);
        return of([]);
      })
    );
  }

  /**
   * Filter products with multiple criteria
   */
  filterProducts(filter: ProductFilter): Observable<Product[]> {
    let filteredProducts = [...this.mockProducts];

    // Filter by category
    if (filter.category && filter.category !== 'todos') {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filter.category
      );
    }

    // Filter by search term
    if (filter.search) {
      const searchTerm = filter.search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm) ||
          p.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Filter by price range
    if (filter.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= filter.minPrice!
      );
    }
    if (filter.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price <= filter.maxPrice!
      );
    }

    // Sort products
    if (filter.sortBy) {
      filteredProducts.sort((a, b) => {
        let aValue: any, bValue: any;

        switch (filter.sortBy) {
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          case 'name':
            aValue = a.name;
            bValue = b.name;
            break;
          default:
            return 0;
        }

        if (filter.sortOrder === 'desc') {
          return bValue > aValue ? 1 : -1;
        } else {
          return aValue > bValue ? 1 : -1;
        }
      });
    }

    return of(filteredProducts).pipe(
      delay(400),
      catchError((error) => {
        console.error('Error filtering products:', error);
        return of([]);
      })
    );
  }

  /**
   * Get product categories
   */
  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.mockProducts.map((p) => p.category))];
    return of(categories).pipe(
      delay(200),
      catchError((error) => {
        console.error('Error fetching categories:', error);
        return of([]);
      })
    );
  }

  /**
   * Get related products
   */
  getRelatedProducts(
    productId: string,
    limit: number = 4
  ): Observable<Product[]> {
    const product = this.mockProducts.find((p) => p.id === productId);
    if (!product) {
      return of([]);
    }

    const relatedProducts = this.mockProducts
      .filter((p) => p.id !== productId && p.category === product.category)
      .slice(0, limit);

    return of(relatedProducts).pipe(
      delay(300),
      catchError((error) => {
        console.error('Error fetching related products:', error);
        return of([]);
      })
    );
  }
}
