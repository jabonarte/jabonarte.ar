export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  ingredients: string[];
  benefits: string[];
  inStock: boolean;
  weight: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
}
