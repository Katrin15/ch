import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuPreloaderService {

  showPreloader$ = new BehaviorSubject(false);

  constructor() { }

  nextValue(val:boolean) {
    this.showPreloader$.next(val);
  }
}