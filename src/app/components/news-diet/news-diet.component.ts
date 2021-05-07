import { Component, OnInit, Input } from '@angular/core';
import { FeedBaseItem } from 'src/app/interfaces/FeedBaseItem';
import { Router } from '@angular/router';
import { MenuPreloaderService } from 'src/app/services/menu-preloader/menu-preloader.service';

@Component({
  selector: 'app-news-diet',
  templateUrl: './news-diet.component.html',
  styleUrls: ['./news-diet.component.sass']
})
export class NewsDietComponent implements OnInit {
  @Input() item : FeedBaseItem;
  @Input() route: String;

  liked: boolean = false;
  imgSrcPath: string = './assets/images/news/';
  defaultImgSrcPath: string;

  constructor(
    private router: Router,
    private menuPreloaderService: MenuPreloaderService
  ) { }

  ngOnInit(): void { 
    // временные картинки   
    this.defaultImgSrcPath = `${this.imgSrcPath}${this.getRandomInt(4)}.svg`;
  }

  toggleLike() {
    this.liked = !this.liked
  }

  public navigateToRoute() {
    this.menuPreloaderService.nextValue(true);
    this.router.navigate(
      [`${this.route}`]
    );
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
