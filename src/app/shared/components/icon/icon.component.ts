import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  faBottleWater,
  faCactus,
  faCamera,
  faComments,
  faDroplet,
  faFlask,
  faHeart,
  faLeaf,
  faMobile,
  faPhone,
  faSearch,
  faShield,
  faShoppingBag,
  faSmile,
  faSync,
  faTheaterMasks,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  template: `
    <i
      class="fa-solid {{ iconClass }}"
      [class]="sizeClass"
      [style.color]="color"
      [attr.aria-label]="ariaLabel"
      role="img"
    ></i>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: 'xs' | 'sm' | 'lg' | 'xl' | '2x' | '3x' = 'lg';
  @Input() color: string = '';
  @Input() ariaLabel: string = '';

  get iconClass(): string {
    const iconMap: { [key: string]: string } = {
      leaf: 'fa-leaf',
      camera: 'fa-camera',
      phone: 'fa-phone',
      comments: 'fa-comments',
      mobile: 'fa-mobile-screen',
      user: 'fa-user',
      sync: 'fa-sync',
      search: 'fa-search',
      flask: 'fa-flask',
      smile: 'fa-face-smile',
      cactus: 'fa-cactus',
      droplet: 'fa-droplet',
      masks: 'fa-masks-theater',
      shield: 'fa-shield-halved',
      heart: 'fa-heart',
      trophy: 'fa-trophy',
      'shopping-bag': 'fa-bag-shopping',
      bottle: 'fa-bottle-water',
      instagram: 'fa-instagram',
      whatsapp: 'fa-whatsapp',
    };
    return iconMap[this.name] || 'fa-question';
  }

  get sizeClass(): string {
    const sizeMap: { [key: string]: string } = {
      xs: 'fa-xs',
      sm: 'fa-sm',
      lg: 'fa-lg',
      xl: 'fa-xl',
      '2x': 'fa-2x',
      '3x': 'fa-3x',
    };
    return sizeMap[this.size] || 'fa-lg';
  }
}
