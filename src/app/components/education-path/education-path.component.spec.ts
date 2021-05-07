import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPathComponent } from './education-path.component';

describe('EducationPathComponent', () => {
  let component: EducationPathComponent;
  let fixture: ComponentFixture<EducationPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
