import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skin-types',

  imports: [CommonModule],
  templateUrl: './skin-types.component.html',
  styleUrl: './skin-types.component.scss',
})
export class SkinTypesComponent {
  @Input() searchQuery: string = '';

  skinTypes = [
    {
      id: 'normal',
      name: 'Piel Normal',
      icon: 'fa-solid fa-face-smile',
      description: 'Equilibrio perfecto',
      characteristics: [
        'Textura suave y uniforme',
        'Poros finos y poco visibles',
        'Sin imperfecciones evidentes',
        'Buena circulación sanguínea',
      ],
      care: 'Mantené la hidratación con productos suaves y equilibrados. Protección solar diaria es fundamental.',
    },
    {
      id: 'seca',
      name: 'Piel Seca',
      icon: 'fa-solid fa-cactus',
      description: 'Falta de hidratación',
      characteristics: [
        'Sensación de tirantez',
        'Textura áspera y escamosa',
        'Líneas finas más visibles',
        'Poca elasticidad',
      ],
      care: 'Hidratación intensa con cremas ricas y aceites naturales. Evitá productos con alcohol.',
    },
    {
      id: 'grasa',
      name: 'Piel Grasa',
      icon: 'fa-solid fa-droplet',
      description: 'Exceso de sebo',
      characteristics: [
        'Brillo excesivo',
        'Poros dilatados',
        'Tendencia al acné',
        'Textura gruesa',
      ],
      care: 'Limpieza suave pero efectiva. Productos oil-free y no comedogénicos. Hidratación ligera.',
    },
    {
      id: 'mixta',
      name: 'Piel Mixta',
      icon: 'fa-solid fa-masks-theater',
      description: 'Combinación de tipos',
      characteristics: [
        'Zona T grasa',
        'Mejillas normales o secas',
        'Poros dilatados en nariz',
        'Textura irregular',
      ],
      care: 'Tratamiento diferenciado por zonas. Productos equilibrados que no resequen ni engrasen.',
    },
    {
      id: 'sensible',
      name: 'Piel Sensible',
      icon: 'fa-solid fa-heart',
      description: 'Reactiva y delicada',
      characteristics: [
        'Enrojecimiento frecuente',
        'Sensación de ardor',
        'Reacciones a productos',
        'Textura fina y delicada',
      ],
      care: 'Productos hipoalergénicos y sin fragancias. Test de parche antes de usar nuevos productos.',
    },
    {
      id: 'madura',
      name: 'Piel Madura',
      icon: 'fa-solid fa-rose',
      description: 'Signos de envejecimiento',
      characteristics: [
        'Líneas de expresión',
        'Pérdida de elasticidad',
        'Manchas y decoloración',
        'Textura más seca',
      ],
      care: 'Productos anti-edad con ingredientes activos. Hidratación profunda y protección solar estricta.',
    },
  ];

  get filteredSkinTypes() {
    if (!this.searchQuery) {
      return this.skinTypes;
    }

    const query = this.searchQuery.toLowerCase();
    return this.skinTypes.filter(
      (type) =>
        type.name.toLowerCase().includes(query) ||
        type.description.toLowerCase().includes(query) ||
        type.characteristics.some((char) =>
          char.toLowerCase().includes(query)
        ) ||
        type.care.toLowerCase().includes(query)
    );
  }
}
