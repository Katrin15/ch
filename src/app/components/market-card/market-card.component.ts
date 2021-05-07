import { Component, OnInit, Input } from '@angular/core';
import { MarketItem } from 'src/app/interfaces/MarketItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-card',
  templateUrl: './market-card.component.html',
  styleUrls: ['./market-card.component.sass']
})
export class MarketCardComponent implements OnInit {

  @Input() item : MarketItem;
  @Input() route: String;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public navigateToRoute() {
    this.router.navigate(
      [`${this.route}`]
    );
  }

}
