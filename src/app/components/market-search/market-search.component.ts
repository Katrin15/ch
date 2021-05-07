import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketItem } from 'src/app/interfaces/MarketItem';
import { PRODUCTS } from 'src/app/data/market-items';

@Component({
  selector: 'app-market-search',
  templateUrl: './market-search.component.html',
  styleUrls: ['./market-search.component.sass']
})
export class MarketSearchComponent implements OnInit {

  searchText = new FormControl('');  
  options = {
      city: "Киев",
      area: "Голосевский район"
  };
  products: MarketItem[];
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.products = PRODUCTS.slice(0,5);
  }

  navigateToRoute(id) {
    this.router.navigate(
      [`market/${id}`]
    );
  }
}
