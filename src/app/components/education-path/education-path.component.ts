import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EducationPathItemsPaged } from 'src/app/interfaces/EducationPathItemsPaged';
import { EducationPathItem } from 'src/app/interfaces/EducationPathItem';
import { NewsItemsPaged } from 'src/app/interfaces/NewsItemsPaged';
import { EducationService } from 'src/app/services/education/education.service';

@Component({
  selector: 'app-education-path',
  templateUrl: './education-path.component.html',
  styleUrls: ['./education-path.component.sass']
})
export class EducationPathComponent implements OnInit {
  public educationPathsLoadedError: boolean = false;
  public topNewsLoadedError: boolean = false;

  public educationPaths: EducationPathItemsPaged;
  

  // scroll loader
  throttle = 150;
  scrollDistance = 9;
  scrollUpDistance = 2;

  // items by page
  public items: EducationPathItem[];
  pageNumber: number = 1;
  itemsCount: number = 10;
  showLoader: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private educationService: EducationService,
  ) { }

  ngOnInit(): void {
    // this.educationPaths = this.activatedRoute.snapshot.data['items'];
    this.items = this.activatedRoute.snapshot.data['items'].items.slice();
  }

  onScrollDown () {
    console.log('scrolled down');
    if (!this.showLoader) {
      this.pageNumber++;
      this.loadEducation(this.pageNumber);
      this.showLoader = true;
    }    
  }


  loadEducation(pageNumber){
    this.educationService.getEducationPathItmesPaged(pageNumber, this.itemsCount).subscribe(
      paths => {
        this.items = this.items.concat(paths.items);
        this.showLoader = false;
      },
      error => {
        this.educationPathsLoadedError = true;
        console.log(error);
        this.showLoader = false;
      }
    )   
  }

}
