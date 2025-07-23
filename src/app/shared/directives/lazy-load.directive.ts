import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
})
export class LazyLoadDirective implements OnInit {
  @Input() appLazyLoad: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage();
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    const img = this.el.nativeElement as HTMLImageElement;
    if (img && this.appLazyLoad) {
      img.src = this.appLazyLoad;
      img.classList.remove('opacity-0');
      img.classList.add('opacity-100');
    }
  }
}
