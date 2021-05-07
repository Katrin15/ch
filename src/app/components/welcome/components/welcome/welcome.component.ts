import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutVideoComponent } from '../../../about-video/about-video.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  showVideo: boolean = false;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  
  handlePopup(){
    this.dialog.open(AboutVideoComponent, {
      disableClose: false,
      panelClass: 'about-video-dialog-container'
    });
  }

}
