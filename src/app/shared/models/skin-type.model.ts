export interface SkinType {
  type: string;
  characteristics: string[];
  recommendedIngredients: string[];
  morningRoutine: string[];
  eveningRoutine: string[];
  avoidIngredients?: string[];
  description?: string;
}

export interface SkinCondition {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  recommendations: string[];
  products: string[];
}
