import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPreloaderComponent } from './menu-preloader.component';

describe('MenuPreloaderComponent', () => {
  let component: MenuPreloaderComponent;
  let fixture: ComponentFixture<MenuPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
