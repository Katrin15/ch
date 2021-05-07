import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDietComponent } from './news-diet.component';

describe('NewsDietComponent', () => {
  let component: NewsDietComponent;
  let fixture: ComponentFixture<NewsDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
