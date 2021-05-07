import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';
import { NewsItem } from 'src/app/interfaces/NewsItem';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.sass']
})
export class NewsDetailsComponent implements OnInit {
  public newsItem: NewsItem;
  public newsItemLoaded: boolean = false;
  public newsItemError: boolean = false;

  public sidebarTitle: string = 'Другие новости:';
  public topNews: NewsItem[];
  public topNewsLoadedError: boolean;

  public fbShareUrl: string;
  public fbDataShareUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
  
    // this.loadNewsDetails();
    this.newsItem = this.route.snapshot.data['item'];
    this.loadTopNews()
    this.createFbLink();
  }

  /*
  private loadNewsDetails(): void {
    this.route.params.subscribe((params) => {
      this.newsService.getNewsFull(params.id).subscribe(
        (newsItem: NewsItem) => {
          this.newsItem = newsItem;
          this.newsItemLoaded = true;
          this.newsItemError = false;
        },
        //Navigate to 404 page if no such news found, but keep news id in the address bar
        () =>  {
          this.router.navigate(['oops'],{skipLocationChange: true}),
          this.newsItemLoaded = false;
          this.newsItemError = true;
        }
      );
    }); 
  }
  */

  private loadTopNews(): void {
    this.newsService.getTopNews(1, 3).subscribe(
      topnews  => this.topNews = topnews.items,
      error => {
        this.topNewsLoadedError = true;
      }
    );
  }

  private createFbLink() {
    // this.fbDataShareUrl = 'https://yandex.ru/'; //window.location.origin;

    // const url = window.location.href;
    const url = 'https://yandex.ru/news/story/Glava_Zabajkalya_poruchil_perevesti_shkolnikov_na_distancionnoe_obuchenie--b43f0a7712f1bd2bf16e63899b9862ff?from=main_portal&lang=ru&lr=109003&mlid=1603088147.glob_225.b43f0a77&msid=1603088544.16028.85318.958066&persistent_id=116564716&stid=U42aAeYk0v57EHZSRKyE&t=1603088147&utm_medium=topnews_news&utm_source=morda_desktop&wan=1';
    this.fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&amp;src=sdkpreparse`;  
  }
}