import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private smoothScrollService: SmoothScrollService) {}

  scrollToSection(sectionId: string): void {
    this.smoothScrollService.scrollToElement(sectionId);
  }
}
