import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})

export class MainComponent {
  carouselItems: any;
  responsiveOptions: any;
  autoplayInterval: number = 0;

  constructor() {
    this.updateAutoplayInterval(window.innerWidth);
  }

  ngOnInit() {
    this.carouselItems = [
      {
        id: 1,
        image: '../assets/images/carousel 1.jpg',
      },
      {
        id: 2,
        image: '../assets/images/carousel 2.jpg',
      },
      {
        id: 3,
        image: '../assets/images/carousel 3.webp',
      },
      {
        id: 4,
        image: '../assets/images/carousel 4.jpg',
      },
      {
        id: 5,
        image: '../assets/images/carousel 5.jpg',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  navigate(link: any) {
    window.open(link, '_blank');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateAutoplayInterval(window.innerWidth);
  }

  private updateAutoplayInterval(screenWidth: number): void {
    if (screenWidth <= 576) {
      this.autoplayInterval = 4000;
    } else {
      this.autoplayInterval = 0;
    }
  }
}
