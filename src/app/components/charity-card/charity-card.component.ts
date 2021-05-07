import { Component, OnInit, Input } from '@angular/core';
import { CharityItem } from 'src/app/interfaces/CharityItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charity-card',
  templateUrl: './charity-card.component.html',
  styleUrls: ['./charity-card.component.sass']
})
export class CharityCardComponent implements OnInit {

  @Input() item : CharityItem;
  @Input() route: String;

  raisedPercent: number = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.raisedPercent = this.item.raised/this.item.goal*100;
  }

  public navigateToRoute() {
    this.router.navigate(
      [`${this.route}`]
    );
  }

}
