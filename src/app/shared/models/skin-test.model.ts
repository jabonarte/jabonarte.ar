export interface SkinTestQuestion {
  id: number;
  question: string;
  options: SkinTestOption[];
}

export interface SkinTestOption {
  id: string;
  text: string;
  value: string;
}

export interface SkinTestAnswer {
  questionId: number;
  selectedOptionId: string;
  value: string;
}

export interface SkinTestResult {
  skinType: string;
  score: number;
  characteristics: string[];
  recommendations: string[];
  products: string[];
}
