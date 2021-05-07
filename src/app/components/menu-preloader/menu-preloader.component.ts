import { Component, OnInit } from '@angular/core';
import { MenuPreloaderService } from 'src/app/services/menu-preloader/menu-preloader.service';

@Component({
  selector: 'app-menu-preloader',
  templateUrl: './menu-preloader.component.html',
  styleUrls: ['./menu-preloader.component.sass']
})
export class MenuPreloaderComponent implements OnInit {

  show: boolean;

  constructor(
    private menuPreloaderService: MenuPreloaderService
  ) { }

  ngOnInit(): void {
    this.menuPreloaderService.showPreloader$.subscribe( val => {
      this.show = val;      
    })
    this.show = false;
  }

}
