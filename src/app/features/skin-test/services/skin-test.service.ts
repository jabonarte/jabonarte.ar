import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  SkinTestQuestion,
  SkinTestAnswer,
  SkinTestResult,
} from '../../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class SkinTestService {
  private questions: SkinTestQuestion[] = [
    {
      id: 1,
      question: '¿Cómo se siente tu piel por la mañana?',
      options: [
        { id: 'A', text: 'Tirante y seca', value: 'seca' },
        { id: 'B', text: 'Grasa y brillante', value: 'grasa' },
        { id: 'C', text: 'Grasa en T, seca en mejillas', value: 'mixta' },
        { id: 'D', text: 'Cómoda y equilibrada', value: 'normal' },
      ],
    },
    {
      id: 2,
      question: '¿Con qué frecuencia tienes brotes o granitos?',
      options: [
        { id: 'A', text: 'Raramente', value: 'seca' },
        { id: 'B', text: 'Frecuentemente', value: 'grasa' },
        { id: 'C', text: 'Solo en zona T', value: 'mixta' },
        { id: 'D', text: 'Ocasionalmente', value: 'normal' },
      ],
    },
    {
      id: 3,
      question: '¿Cómo reacciona tu piel al sol?',
      options: [
        { id: 'A', text: 'Se irrita fácilmente', value: 'seca' },
        { id: 'B', text: 'Produce más grasa', value: 'grasa' },
        { id: 'C', text: 'Varía según la zona', value: 'mixta' },
        { id: 'D', text: 'Se broncea gradualmente', value: 'normal' },
      ],
    },
    {
      id: 4,
      question: '¿Cómo se ve tu piel sin maquillaje?',
      options: [
        { id: 'A', text: 'Opaca y descamada', value: 'seca' },
        { id: 'B', text: 'Brillante y con poros visibles', value: 'grasa' },
        { id: 'C', text: 'Brillante en T, normal en mejillas', value: 'mixta' },
        { id: 'D', text: 'Uniforme y saludable', value: 'normal' },
      ],
    },
    {
      id: 5,
      question: '¿Qué productos prefieres usar?',
      options: [
        { id: 'A', text: 'Cremas nutritivas y aceites', value: 'seca' },
        { id: 'B', text: 'Geles y productos matificantes', value: 'grasa' },
        { id: 'C', text: 'Diferentes productos por zona', value: 'mixta' },
        { id: 'D', text: 'Productos suaves y equilibrados', value: 'normal' },
      ],
    },
  ];

  private skinTypeResults = {
    1: {
      skinType: 'seca',
      characteristics: [
        'Sensación de tirantez',
        'Descamación',
        'Poros pequeños',
        'Líneas finas tempranas',
      ],
      recommendations: [
        'Usa productos con ácido hialurónico y ceramidas',
        'Evita limpiadores agresivos',
        'Aplica aceites nutritivos por la noche',
        'Usa protector solar hidratante',
        'Bebe mucha agua para hidratación interna',
      ],
      products: [
        'Jabón de Avena y Miel',
        'Sérum de Ácido Hialurónico',
        'Aceite de Rosa Mosqueta',
        'Crema Hidratante Aloe',
      ],
    },
    2: {
      skinType: 'grasa',
      characteristics: [
        'Brillo excesivo',
        'Poros dilatados',
        'Tendencia al acné',
        'Textura gruesa',
      ],
      recommendations: [
        'Usa productos con ácido salicílico',
        'Limpia dos veces al día',
        'Evita productos muy oleosos',
        'Usa protector solar oil-free',
        'Incorpora arcilla en tu rutina',
      ],
      products: [
        'Jabón Carbón Activado',
        'Sérum de Niacinamida',
        'Aceite de Jojoba',
        'Crema Gel Oil-Free',
      ],
    },
    3: {
      skinType: 'mixta',
      characteristics: [
        'Zona T grasa',
        'Mejillas secas/normales',
        'Poros variables',
        'Necesita cuidado dual',
      ],
      recommendations: [
        'Usa diferentes productos por zona',
        'Controla la zona T con productos matificantes',
        'Hidrata las mejillas con productos suaves',
        'Usa protector solar universal',
        'Aplica tratamientos específicos por área',
      ],
      products: [
        'Gel Limpiador Equilibrante',
        'Sérum de Niacinamida',
        'Crema Diferenciada por Zonas',
        'Tónico Dual',
      ],
    },
    4: {
      skinType: 'normal',
      characteristics: [
        'Equilibrada y saludable',
        'Poros pequeños',
        'Textura suave',
        'Sin brillos excesivos',
      ],
      recommendations: [
        'Mantén una rutina equilibrada',
        'Usa protector solar diariamente',
        'Incorpora antioxidantes como vitamina C',
        'Hidrata regularmente',
        'Exfolia suavemente una vez por semana',
      ],
      products: [
        'Jabón de Avena y Miel',
        'Sérum de Vitamina C',
        'Crema Hidratante Aloe',
        'Aceite de Jojoba',
      ],
    },
  };

  getQuestions(): Observable<SkinTestQuestion[]> {
    // Simular delay de red
    return of(this.questions).pipe(delay(500));
  }

  calculateResult(answers: SkinTestAnswer[]): SkinTestResult {
    if (!answers || answers.length === 0) {
      // Resultado por defecto si no hay respuestas
      const defaultResult = this.skinTypeResults[4];
      return {
        skinType: defaultResult.skinType,
        score: 0,
        characteristics: defaultResult.characteristics,
        recommendations: defaultResult.recommendations,
        products: defaultResult.products,
      };
    }

    // Sistema de conteo simple como en target.js
    const counts = answers.reduce((acc, answer) => {
      acc[answer.value as string] = (acc[answer.value as string] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Determinar el tipo de piel con mayor conteo
    const result = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    // Mapear el tipo de piel al resultado correspondiente
    const skinTypeMap = {
      seca: 1,
      grasa: 2,
      mixta: 3,
      normal: 4,
    };

    const skinTypeKey = skinTypeMap[result as keyof typeof skinTypeMap];
    const skinTypeResult =
      this.skinTypeResults[skinTypeKey as keyof typeof this.skinTypeResults];

    return {
      skinType: skinTypeResult.skinType,
      score: counts[result] || 0,
      characteristics: skinTypeResult.characteristics,
      recommendations: skinTypeResult.recommendations,
      products: skinTypeResult.products,
    };
  }

  saveResultsToLocalStorage(result: SkinTestResult): void {
    const testResults = {
      result,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    localStorage.setItem('skinTestResults', JSON.stringify(testResults));
  }

  getResultsFromLocalStorage(): SkinTestResult | null {
    const stored = localStorage.getItem('skinTestResults');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        return data.result;
      } catch {
        return null;
      }
    }
    return null;
  }

  clearResultsFromLocalStorage(): void {
    localStorage.removeItem('skinTestResults');
  }
}
