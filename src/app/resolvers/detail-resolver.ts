import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { map } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators';
// import { of } from 'rxjs'

import { NewsService } from '../services/news/news.service';
import { DietsService } from 'src/app/services/diets/diets.service';
import { EducationService } from 'src/app/services/education/education.service';
import { ShoppingService } from 'src/app/services/shopping/shopping.service';

import { MenuPreloaderService } from 'src/app/services/menu-preloader/menu-preloader.service';

@Injectable({ providedIn: 'root' })
export class DetailResolver implements Resolve<any> {
    constructor(
        private router: Router,
        private newsService: NewsService,
        private dietsService: DietsService,
        private educationService: EducationService,
        private shoppingService: ShoppingService,
        private menuPreloaderService: MenuPreloaderService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        const url: string = route.url[0].path;
        switch(url) {
            case 'news': 
                return this.newsService.getNewsFull(route.paramMap.get('id')).pipe(
                  map((res) => {
                    this.menuPreloaderService.nextValue(false);
                    return res;
                  })
                );
            case 'diets': 
                return this.dietsService.getDietFull(route.paramMap.get('id')).pipe(
                  map((res) => {
                    this.menuPreloaderService.nextValue(false);
                    return res;
                  })
                );
            case 'market': 
                return this.shoppingService.getAnnouncement(route.paramMap.get('id')).pipe(
                  map((res) => {
                    this.menuPreloaderService.nextValue(false);
                    return res;
                  })
                );
            case 'educational-path': 
                return this.educationService.getEducationPath(route.paramMap.get('id')).pipe(
                  map((res) => {
                    this.menuPreloaderService.nextValue(false);
                    return res;
                  })
                );
        }
    }
}