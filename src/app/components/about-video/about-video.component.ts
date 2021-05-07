import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-video',
  templateUrl: './about-video.component.html',
  styleUrls: ['./about-video.component.sass']
})
export class AboutVideoComponent implements OnInit {
  width:number;
  height:number;  

  constructor(
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {

    this.breakpointObserver
      .observe([
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,    
      ])
      .subscribe((state: BreakpointState) => {
        if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
          const w =  window.innerWidth - 50;
          this.width = w;
          this.height = w*0.562;
        }
        else if (this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
          const h =  window.innerHeight*0.8 - 50;
          this.height = h;
          this.width = h*1.78;
        }
        else if (this.breakpointObserver.isMatched(Breakpoints.TabletPortrait)) {
          const w = window.innerWidth*0.8 - 50;
          this.width = w;
          this.height = w*0.562;
        }
        else if (this.breakpointObserver.isMatched(Breakpoints.TabletLandscape)) {
          const h =  window.innerHeight*0.6 - 50;
          this.height = h;
          this.width = h*1.78;
        }
        else {
          const w = window.innerWidth*0.6 - 50;
          this.width = w;
          this.height = w*0.562; 
        }
          
      });
  }
}
