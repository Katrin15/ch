import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietsItemsPaged } from 'src/app/interfaces/DietsItemsPaged';
import { DietsItem } from 'src/app/interfaces/DietsItem';
import { DietsService } from 'src/app/services/diets/diets.service';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.sass']
})
export class DietsComponent implements OnInit {
 
  public dietsLoadedError: boolean = false;
  public diets: DietsItemsPaged;

  // scroll loader
  throttle = 150;
  scrollDistance = 2;
  scrollUpDistance = 2;

  // items by page
  public items: DietsItem[];
  pageNumber: number = 1;
  itemsCount: number = 10;
  showLoader: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dietsService: DietsService,
  ) { }

  ngOnInit(): void {
    this.diets = this.activatedRoute.snapshot.data['items'];
    this.items = this.diets.items.slice();
  }

  onScrollDown () {
    if (!this.showLoader && this.diets.totalSize > this.items.length) {
      // console.log('scrolled down');
      this.pageNumber++;
      this.loadDiets(this.pageNumber);
      this.showLoader = true;
    }    
  }

  loadDiets(pageNumber){
    this.dietsService.getDietsPaged(pageNumber, this.itemsCount).subscribe(
      diets => {
        this.items = this.items.concat(diets.items);
        this.showLoader = false;
      },
      error => {
        this.dietsLoadedError = true;
        console.log(error);
        this.showLoader = false;
      }
    )   
  }
}
