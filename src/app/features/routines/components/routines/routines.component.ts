import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkinType {
  value: string;
  label: string;
}

@Component({
  selector: 'app-routines',

  imports: [CommonModule],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.scss',
})
export class RoutinesComponent {
  activeTab = 'normal';

  skinTypes: SkinType[] = [
    { value: 'normal', label: 'Normal' },
    { value: 'seca', label: 'Seca' },
    { value: 'grasa', label: 'Grasa' },
    { value: 'mixta', label: 'Mixta' },
  ];

  // Rutinas para piel normal
  normalMorningRoutine = [
    'Limpieza suave con jabón de avena',
    'Tónico equilibrante',
    'Sérum de vitamina C',
    'Crema hidratante',
    'Protector solar',
  ];

  normalNightRoutine = [
    'Desmaquillante natural',
    'Limpieza profunda',
    'Tónico calmante',
    'Aceite facial nutritivo',
    'Crema reparadora nocturna',
  ];

  // Rutinas para piel seca
  dryMorningRoutine = [
    'Limpieza cremosa suave',
    'Tónico hidratante sin alcohol',
    'Sérum de ácido hialurónico',
    'Crema nutritiva rica',
    'Protector solar hidratante',
  ];

  dryNightRoutine = [
    'Aceite desmaquillante',
    'Limpieza cremosa',
    'Esencia hidratante',
    'Aceite de rosa mosqueta',
    'Crema reparadora intensa',
  ];

  // Rutinas para piel grasa
  oilyMorningRoutine = [
    'Gel limpiador purificante',
    'Tónico astringente natural',
    'Sérum de niacinamida',
    'Crema gel oil-free',
    'Protector solar matificante',
  ];

  oilyNightRoutine = [
    'Agua micelar purificante',
    'Gel limpiador profundo',
    'Tónico equilibrante',
    'Aceite de jojoba (ligero)',
    'Crema reguladora nocturna',
  ];

  // Rutinas para piel mixta
  combinationMorningRoutine = [
    'Limpieza suave con gel',
    'Tónico equilibrado',
    'Sérum de vitamina B5',
    'Crema hidratante ligera',
    'Protector solar oil-free',
  ];

  combinationNightRoutine = [
    'Desmaquillante bifásico',
    'Limpieza profunda suave',
    'Tónico calmante',
    'Aceite de argán (ligero)',
    'Crema reparadora equilibrada',
  ];

  setActiveTab(tabValue: string): void {
    this.activeTab = tabValue;
  }
}
