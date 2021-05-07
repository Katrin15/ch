import { Component, OnInit } from '@angular/core';
import { CharityItem } from 'src/app/interfaces/CharityItem';
import { PROJECTS } from 'src/app/data/charity-items';

@Component({
  selector: 'app-charity-feed',
  templateUrl: './charity-feed.component.html',
  styleUrls: ['./charity-feed.component.sass']
})
export class CharityFeedComponent implements OnInit {

  projects: CharityItem[] = [];
  projectsByPage: CharityItem[];

  // scroll loader
  throttle = 150;
  scrollDistance = 1;
  scrollUpDistance = 2;

  showLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.projectsByPage = PROJECTS;
    this.projects = this.projectsByPage.slice();        
  }

  onScrollDown () {
    this.showLoader = true;
    this.projects = this.projects.concat(this.projectsByPage);
    this.showLoader = false;
  }
  
}

