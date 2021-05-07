import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/User';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuPreloaderService } from 'src/app/services/menu-preloader/menu-preloader.service';

enum ActivePath {
  NEWS = 'NEWS',
  EDUCATION = 'EDUCATION',
  RECOMMENDATIONS = 'RECOMMENDATIONS',
  MARKET = 'MARKET',
  CHARITY = 'CHARITY'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  ON_INFO_FORUM_URL: string = "http://forum.on-info.by";

  public activePath = ActivePath;
  public currentActivePath: ActivePath = ActivePath.NEWS;

  private currentUserBSSubscription: Subscription;

  preToolbarVisibleStatus: boolean = true;

  loggedIn: boolean = false;
  loggedInUser: User;

  isMenuHidden: boolean = true;
  isLoadingBarShow: boolean = false;


  @ViewChild('sidenav') sidenav: MatSidenav

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private menuPreloaderService: MenuPreloaderService
  ) { }

  ngOnInit(): void {    

    this.resolveActiveControl();

    //Subscribe to login events in order to track logged-in/logged-out status
    this.currentUserBSSubscription = this.authService.currentUserBS$.subscribe((user: User) => {
        if(user) {
          this.loggedIn = true;
          this.loggedInUser = user;
        } else {
          this.loggedIn = false;
          this.loggedInUser = null;
        }
    })

  }

  ngOnDestroy(): void {
    this.currentUserBSSubscription.unsubscribe();
  }

  public navigateToNews(){
    this.menuPreloaderService.nextValue(true);
    this.router.navigate(['news']);
  }

  public navigateToEducationalPath(){
    this.menuPreloaderService.nextValue(true);
    this.router.navigate(['educational-path']);
  }

  public navigateToRecommendations(){
    this.router.navigate(['recommendations']);
  }

  public navigateToDiets(){
    this.menuPreloaderService.nextValue(true);
    this.router.navigate(['diets']);
  }

  public navigateToMarket(){
    this.router.navigate(['market']);
  }

  public navigateToPartners(){
    this.menuPreloaderService.nextValue(true);
    this.router.navigate(['partners']);
  }

  public navigateToCharity(){
    this.router.navigate(['charity']);
  }

  public navigateToForum(){
    window.location.href = this.ON_INFO_FORUM_URL;
  }

  public handleLogin(){
    this.dialog.open(LoginDialogComponent, {
      height: '550px',
      width: '450px',
      disableClose: false
    });
  }

  public handleLogout() {
    this.authService.logout();
  }

  public showUserDetails() {

  }

  public isPreToolbarVisible() {
    return true;
  }

  private resolveActiveControl() {
    switch(this.route.routeConfig.path){
      case 'news':
        this.currentActivePath = ActivePath.NEWS;
        break;
      case 'education':
        this.currentActivePath = ActivePath.EDUCATION;
        break;
      case 'recommendations':
        this.currentActivePath = ActivePath.RECOMMENDATIONS;
        break;
      case 'market':
        this.currentActivePath = ActivePath.MARKET;
        break;
    }
  }

  openMenu() {
    this.isMenuHidden = ! this.isMenuHidden;
  }
  closeMenu() {
    this.isMenuHidden = true;
  }

}
