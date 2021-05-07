import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { map } from 'rxjs/operators';

import { NewsService } from '../services/news/news.service';
import { DietsService } from 'src/app/services/diets/diets.service';
import { EducationService } from 'src/app/services/education/education.service';
import { RecommendationsService } from 'src/app/services/recommendations/recommendations.service';
import { ShoppingService } from 'src/app/services/shopping/shopping.service';

import { MenuPreloaderService } from 'src/app/services/menu-preloader/menu-preloader.service';

@Injectable({ providedIn: 'root' })
export class FeedResolver implements Resolve<any> {
    constructor(
        private newsService: NewsService,
        private dietsService: DietsService,
        private educationService: EducationService,
        private recommendationsService: RecommendationsService,
        private shoppingService: ShoppingService,
        private menuPreloaderService: MenuPreloaderService,
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        const url: string = route.url[0].path;
        // console.log("URL ", url);        
        switch(url) {
            case 'news':
                return this.newsService.getNewsPreviewPaged(1, 10).pipe(
                    map((res) => {
                        this.menuPreloaderService.nextValue(false);
                        return res;
                    })
                );
        
            case 'diets':
                return this.dietsService.getDietsPaged(1, 10).pipe(
                    map((res) => {
                        this.menuPreloaderService.nextValue(false);
                        return res;
                    })
                );

            case 'market': 
                return this.shoppingService.getAnnouncementsPaged(1, 10).pipe(
                    map((res) => {
                        this.menuPreloaderService.nextValue(false);
                        return res;
                    })
                );

            case 'educational-path': 
                return this.educationService.getEducationPathItmesPaged(1, 20).pipe(
                    map((res) => {
                        this.menuPreloaderService.nextValue(false);
                        return res;
                    })
                );
            
            case 'partners':
                return this.recommendationsService.getRecommendationsPreviewPaged(1, 10).pipe(
                    map((res) => {
                        this.menuPreloaderService.nextValue(false);
                        return res;
                    })
                );

            // case 'charity':
            // break;
        }
    }
}