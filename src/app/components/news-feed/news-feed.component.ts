import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news/news.service';
import { NewsItemsPaged } from 'src/app/interfaces/NewsItemsPaged';
import { NewsItem } from 'src/app/interfaces/NewsItem';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { EducationService } from 'src/app/services/education/education.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent implements OnInit {
  public newsLoadedError: boolean = false;
  public topNewsLoadedError: boolean = false;

  public news: NewsItemsPaged;
  public topNews: NewsItemsPaged;

  // scroll loader
  throttle = 150;
  scrollDistance = 2;
  scrollUpDistance = 2;

  // items by page
  public items: NewsItem[];
  pageNumber: number = 1;
  itemsCount: number = 10;
  showLoader: boolean = false;

  viewOption: string;
  title: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private educationService: EducationService
  ) { }
    
  ngOnInit(): void {
    this.viewOption = this.activatedRoute.snapshot.data.viewOption;
    if (this.viewOption === 'news') {
      this.title = 'Новости';
      // this.loadTopNews();      
    }
    else if (this.viewOption === 'educational-path') {
      this.title = 'Образовательные маршруты';  
    }
    
    // this.news = this.activatedRoute.snapshot.data['items'];
    this.news = this.activatedRoute.snapshot.data['items'];
    this.items = this.news.items.slice();
  }

  public navigateToNewsDetails(newsId: string) {
    this.router.navigate(
      [`news/${newsId}`]
    );
  }

  onScrollDown () {
    if (!this.showLoader && this.news.totalSize > this.items.length) {
      // console.log('scrolled down');
      this.pageNumber++;
      this.load(this.pageNumber);
      this.showLoader = true;
    }    
  }

  load(pageNumber){
    let $result: Observable<NewsItemsPaged>;
    if (this.viewOption === 'news') {
      $result = this.newsService.getNewsPreviewPaged(pageNumber, this.itemsCount);
      
    }
    else if (this.viewOption === 'educational-path') {
      $result = this.educationService.getEducationPathItmesPaged(pageNumber, this.itemsCount);
    }
    $result.subscribe(
      news => {
        this.items = this.items.concat(news.items);
        this.showLoader = false;
      },
      error => {
        this.newsLoadedError = true;
        console.log(error);
        this.showLoader = false;
      }
    )
  }
}
