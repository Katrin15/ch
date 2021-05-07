import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietDetailsComponent } from './diet-details.component';

describe('DietDetailsComponent', () => {
  let component: DietDetailsComponent;
  let fixture: ComponentFixture<DietDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
