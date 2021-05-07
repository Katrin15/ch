import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/services/education/education.service';
import { NewsItem } from 'src/app/interfaces/NewsItem';

import { EDUCATION_PATHS } from 'src/app/data/education-items';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.sass']
})
export class EducationDetailComponent implements OnInit {

  public items:  NewsItem[];
  public item: NewsItem;
  public itemLoaded: boolean = false;
  public itemError: boolean = false;

  public sidebarTitle: string = 'Другие маршруты:';
  public topItems: NewsItem[];
  public topItemLoadedError: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private educationService: EducationService
  ) { }

  ngOnInit(): void {  
    // this.loadEducationDetails();
    this.item = this.route.snapshot.data['item'];
    this.getTopItems();
  }

  private getTopItems(): void {
    this.topItems = EDUCATION_PATHS;
  }

 /*
  private loadEducationDetails(): void {
    this.route.params.subscribe((params) => {
      this.educationService.getEducationPath(params.id).subscribe(
        (newsItem: NewsItem) => {
          this.item = newsItem;
          this.itemLoaded = true;
          this.itemError = false;
        },
        //Navigate to 404 page if no such news found, but keep news id in the address bar
        () =>  {
          this.router.navigate(['oops'],{skipLocationChange: true}),
          this.itemLoaded = false;
          this.itemError = true;
        }
      );
    }); 
  }
  */
  
}
