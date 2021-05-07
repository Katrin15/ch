import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MarketItem } from 'src/app/interfaces/MarketItem';
import { PRODUCTS } from 'src/app/data/market-items';

declare let $ :any;

interface Slide {
  img: string
}
interface Config {
  slidesToShow: number, 
  slidesToScroll: number,
  arrows?: boolean,
  infinite?: boolean,
  fade?: boolean,
}

@Component({
  selector: 'app-market-details',
  templateUrl: './market-details.component.html',
  styleUrls: ['./market-details.component.sass']
})
export class MarketDetailsComponent implements OnInit {

  @ViewChild("popup") popup : ElementRef;
  isPopupHidden: boolean = false;
  currentSliderIndex: string;
  slides: Slide[];
  slideConfig1: Config;
  slideConfig2: Config;
  slideConfig3: Config;  

  item: MarketItem;
  products: MarketItem[];  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.products = PRODUCTS;    
    this.getProduct();

    this.breakpointObserver
      .observe(['(max-width: 599px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isPopupHidden = true;
        } else {
          this.isPopupHidden = false;
        }
      });
  }

  private getProduct(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.item = this.products.find( x => x.id === id);
      this.slides = this.item.pictures.map( x => { return {img: x.link} });

      this.slideConfig1 = {
        slidesToShow: 1, 
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        fade: true,
      };
      this.slideConfig2 = {
        slidesToShow: this.navCounter(), // 3, 
        slidesToScroll: 1,  
        arrows: true,  
        infinite: true,
      };
      this.slideConfig3 = {
        slidesToShow: 1, 
        slidesToScroll: 1,    
        infinite: true,
        fade: true,
      };      
    }); 
  }
  // carousel
  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
      if (element.classList.contains('popup') || element.classList.contains('carousel-popup__slide')) { 
        // close popup
        $('.carousel-main').slick('slickGoTo', this.currentSliderIndex);
        $('.carousel-nav').slick('slickGoTo', this.currentSliderIndex);
        this.popup.nativeElement.style = "visibility: hidden"
      }
      else if (element.classList.contains('carousel-main__img') && (!this.isPopupHidden)) {  
        // open popup      
        const index = element.getAttribute("data-index");
        $('.carousel-popup').slick('slickGoTo', index);
        this.popup.nativeElement.style = "visibility: visible";
      }
      else if (element.classList.contains('carousel-nav__img')) {
        const index = element.getAttribute('data-index');
        $('.carousel-main').slick('slickGoTo', index);
        $('.carousel-nav').slick('slickGoTo', index);
      }
  }
  beforeChangeNav(e) {
    const nextIndex = e.nextSlide;
    this.currentSliderIndex = nextIndex;    
    $('.carousel-main').slick('slickGoTo', nextIndex);
    $('.carousel-popup').slick('slickGoTo', nextIndex);
  }
  beforeChangePopup(e) {
    this.currentSliderIndex = e.nextSlide;    
  }
  navCounter() {
    if (this.slides.length > 3) {
      return 3
    }
    else {
      return 1 // this.slides.length
    }
  }
}
