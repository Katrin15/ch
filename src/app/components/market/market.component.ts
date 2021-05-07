import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketItem } from 'src/app/interfaces/MarketItem';
import { PRODUCTS } from 'src/app/data/market-items';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass']
})
export class MarketComponent implements OnInit {

  products: MarketItem[] = [];
  productsByPage:  MarketItem[];

  // scroll loader
  throttle = 150;
  scrollDistance = 2;
  scrollUpDistance = 2;

  showLoader: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productsByPage = PRODUCTS;
    this.products = this.productsByPage.slice();
    // this.products = this.activatedRoute.snapshot.data['items'];
  }
  
  onScrollDown () {
    this.showLoader = true;
    this.products = this.products.concat(this.productsByPage);
    this.showLoader = false;
  }

}
