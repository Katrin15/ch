import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';
import { NewsItem } from 'src/app/interfaces/NewsItem';
import { DietsService } from 'src/app/services/diets/diets.service';
import { DietsItem } from 'src/app/interfaces/DietsItem';

@Component({
  selector: 'app-diet-details',
  templateUrl: './diet-details.component.html',
  styleUrls: ['./diet-details.component.sass']
})
export class DietDetailsComponent implements OnInit {
  public dietsItem: DietsItem;
  public dietsItemLoaded: boolean = false;
  public dietsItemError: boolean = false;

  public sidebarTitle: string = 'Топ новости:';
  public topNews: NewsItem[];
  public topNewsLoadedError: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService,
    private dietsService: DietsService
  ) { }

  ngOnInit(): void {
    // this.loadDiet();
    this.dietsItem = this.route.snapshot.data['item'];
    this.loadTopNews();
  }

  /*
  private loadDiet(): void {
    //TODO: cleanup nested subscribes
    this.route.params.subscribe((params) => {
      this.dietsService.getDietFull(params.id).subscribe(
        (dietsItem: DietsItem) => {
          this.dietsItem = dietsItem;
          this.dietsItemLoaded = true;
          this.dietsItemError = false;
        },
        //Navigate to 404 page if no such news found, but keep news id in the address bar
        () =>  {
          this.router.navigate(['oops'],{skipLocationChange: true}),
          this.dietsItemLoaded = false;
          this.dietsItemError = true;
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
}
