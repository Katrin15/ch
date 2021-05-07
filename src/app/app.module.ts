import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { EducationPathComponent } from './components/education-path/education-path.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseComponent } from './components/base/base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FooterComponent } from './components/footer/footer.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AuthHeaderInterceptor } from './interceptors/auth-header.interceptor';
import { ResolvePreviewImageUrlPipe } from './pipes/resolve-preview-image-url.pipe';
import { GrabImagePipe } from './pipes/grabImage/grab-image.pipe';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider,} from 'angularx-social-login';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {environment as ENV} from 'src/environments/environment';

import { HeaderComponent } from './components/header/header.component';
import { NewsDietComponent } from './components/news-diet/news-diet.component';
import { DietsComponent } from './components/diets/diets.component';
import { DietDetailsComponent } from './components/diet-details/diet-details.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MarketComponent } from './components/market/market.component';
import { MarketDetailsComponent } from './components/market-details/market-details.component';
import { EducationDetailComponent } from './components/education-detail/education-detail.component';
import { MarketCardComponent } from './components/market-card/market-card.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CharityFeedComponent } from './components/charity-feed/charity-feed.component';
import { CharityCardComponent } from './components/charity-card/charity-card.component';
import { MarketSearchComponent } from './components/market-search/market-search.component';
import { MenuPreloaderComponent } from './components/menu-preloader/menu-preloader.component';
import {WelcomeComponent} from "./components/welcome/components/welcome/welcome.component";
import { AboutVideoComponent } from './components/about-video/about-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    EducationPathComponent,
    PageNotFoundComponent,
    BaseComponent,
    FooterComponent,
    NewsDetailsComponent,
    ResolvePreviewImageUrlPipe,
    GrabImagePipe,
    LoginDialogComponent,
    WelcomeComponent,
    HeaderComponent,
    NewsDietComponent,
    DietsComponent,
    DietDetailsComponent,
    MarketComponent,
    MarketDetailsComponent,
    MarketCardComponent,
    EducationDetailComponent,
    SidebarComponent,
    PartnersComponent,
    MarketCardComponent,
    CharityFeedComponent,
    CharityCardComponent,
    MarketSearchComponent,
    MenuPreloaderComponent,
    AboutVideoComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatProgressButtonsModule.forRoot(),
    SlickCarouselModule,
    InfiniteScrollModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(ENV.googleSocialApiKey),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(ENV.facebookSocialApiKey),
          }
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
