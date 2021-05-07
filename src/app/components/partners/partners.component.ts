import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecommendationItemsPaged } from 'src/app/interfaces/RecommendationItemsPaged';
// import { RecommendationsService } from 'src/app/services/recommendations/recommendations.service';
import { RecommendationItem } from 'src/app/interfaces/RecommendationItem';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.sass']
})
export class PartnersComponent implements OnInit {
  public recommendationsLoadedError: boolean = false;
  public topNewsLoadedError: boolean = false;
 
  public recommendations: RecommendationItemsPaged;

  currentTabActiveIndex: number  = 0;
  currentRecommendation: RecommendationItem;

  constructor(
    // private recommendationsService: RecommendationsService
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.recommendations = this.activatedRoute.snapshot.data['items'];
    this.currentRecommendation = this.recommendations.items[0];
    // this.loadRecommendations();
  }

  public setActiveTabIndex(index: number) {
    this.currentTabActiveIndex = index;
    this.currentRecommendation = this.recommendations.items[index];
  }

  /**
   * Calculate when description area should be shifted according to selected vertical tab.
   * Since the details area is way wider than the tab itself - we'll not be shifting it for first number of tabs.
   * 
   * @returns number of pixels to adjust details area top margin
   */
  public getDescriptionTopMagin(): number {
    const MARGIN_GAP: number = 65; //pixel height of vertical tabs to adjust main content accordingly
    let marginMultiplyFactor: number = Math.floor(this.currentTabActiveIndex / 6) * 6;

    return marginMultiplyFactor * MARGIN_GAP;
  }

  /*
  private loadRecommendations(){
    this.recommendationsService.getRecommendationsPreviewPaged(1, 10).subscribe(
      recommendations => {
        this.recommendations = recommendations;
        this.currentRecommendation = recommendations.items[0];
      },
      error => {
        this.recommendationsLoadedError = true;
        console.log(error);
      }
    )   
  }
  */
}
