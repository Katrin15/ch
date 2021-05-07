import { TestBed } from '@angular/core/testing';

import { MenuPreloaderService } from './menu-preloader.service';

describe('MenuPreloaderService', () => {
  let service: MenuPreloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPreloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
