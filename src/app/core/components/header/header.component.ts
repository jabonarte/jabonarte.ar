import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-header',

  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private smoothScrollService: SmoothScrollService) {}

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.smoothScrollService.scrollToElement(sectionId);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
