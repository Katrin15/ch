import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { EducationPathComponent } from './components/education-path/education-path.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';

import { DietsComponent } from './components/diets/diets.component';
import { DietDetailsComponent } from './components/diet-details/diet-details.component';
import { MarketComponent } from './components/market/market.component';
import { MarketDetailsComponent } from './components/market-details/market-details.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CharityFeedComponent } from './components/charity-feed/charity-feed.component';
import { EducationDetailComponent } from './components/education-detail/education-detail.component';

import { DetailResolver } from './resolvers/detail-resolver';
import { FeedResolver } from './resolvers/feed-resolver';
import {WelcomeComponent} from "./components/welcome/components/welcome/welcome.component";


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'news',
    component: NewsFeedComponent,
    data: { viewOption: 'news' },
    resolve: { items: FeedResolver }
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent,
    resolve: { item: DetailResolver }
  },
  // {path: 'education', component: EducationPathComponent  },
  {
    path: 'diets',
    component: DietsComponent,
    resolve: { items: FeedResolver }
  },
  {
    path: 'diets/:id',
    component: DietDetailsComponent,
    resolve: { item: DetailResolver }
  },
  {
    path: 'market',
    component: MarketComponent,
    // resolve: { items: FeedResolver } // doesn't work with api, works with mockup
  },
  {
    path: 'market/:id',
    component: MarketDetailsComponent,
    // resolve: { item: DetailResolver } // doesn't work with api, works with mockup
  },
  {
    path: 'educational-path',
    component: NewsFeedComponent,
    data: { viewOption: 'educational-path' },
    resolve: { items: FeedResolver }
  },
  {
    path: 'educational-path/:id',
    component: EducationDetailComponent,
    resolve: { item: DetailResolver }
  },
  {
    path: 'partners',
    component: PartnersComponent,
    resolve: { items: FeedResolver }
  },
  {path: 'charity', component: CharityFeedComponent}, // there isn't service
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
