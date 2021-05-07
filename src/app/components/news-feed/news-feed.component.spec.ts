import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsFeedComponent } from './news-feed.component';

import { NewsService } from 'src/app/services/news/news.service';
import { EducationService } from 'src/app/services/education/education.service';
import { Observable, of } from 'rxjs';
import { PROJECTS } from 'src/app/data/charity-items';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

fdescribe('NewsFeedComponent', () => {
  let component: NewsFeedComponent;
  let fixture: ComponentFixture<NewsFeedComponent>;
  let newsService: NewsService;
  let educationService: EducationService;
  let spyNews;
  let spyEdu;
  let mockNews;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [NewsService, EducationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedComponent);
    component = fixture.componentInstance;
    newsService = fixture.debugElement.injector.get(NewsService);
    educationService = fixture.debugElement.injector.get(EducationService);
    mockNews = PROJECTS;
    component.viewOption = 'news';
    component.news = PROJECTS;
    spyNews = spyOn(newsService, 'getNewsPreviewPaged').and.returnValue(of(mockNews));
    spyEdu = spyOn(educationService, 'getEducationPathItmesPaged').and.returnValue(of(mockNews));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service newsService', () => {
    component.load(1);
    expect(spyNews.calls.count(1)).toBeTruthy();
    // только один из 2х сервисов
    // expect(spyEdu.calls.count(1)).toBeTruthy();
  });
});
