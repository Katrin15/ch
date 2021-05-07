import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityFeedComponent } from './charity-feed.component';

describe('CharityFeedComponent', () => {
  let component: CharityFeedComponent;
  let fixture: ComponentFixture<CharityFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
