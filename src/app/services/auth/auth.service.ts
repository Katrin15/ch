import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment as ENV } from '../../../environments/environment';
import { User } from 'src/app/interfaces/User';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, from } from 'rxjs';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private CURRENT_USER = 'CURRENT_USER';
  private ACCESS_TOKEN = 'X-Token';
  private ACCESS_TOKEN_EXPIRATION = 'X-Token-Exp';


  private loggedIn: boolean;

  // Create an observable entry point for log-in/log-out statuses to communicate throughout app
  public currentUserBS$: BehaviorSubject<User> = new BehaviorSubject(null);
    
  constructor(
    private http: HttpClient,
    private socialAuthService: SocialAuthService
  ) { 
    const loginDataRaw: string = localStorage.getItem(this.CURRENT_USER);
    const loginData: User = loginDataRaw && JSON.parse(loginDataRaw);

    //TODO: check for access token expiration and logout if expired
    if (!this.loggedIn && loginData) {
      console.log('Login data has been detected. Logging in...');
      this.setLoggedIn(true, loginData);
    }
  }

  /**
   * Do signin.
   *
   * POST '/auth/signin'
   *
   * Getting JWT token from our auth endpoint and store it locally.
   *
   *
   * @param email user identification email
   * @param password a password
   */
  public signin(email: string, password: string): Observable<boolean> {
      return this.http.post<User>(
          `${ENV.backendUrl}/auth/signin`,
          {email, password},
          {      
            observe: 'response'
          }
      )
      .pipe(
        map(response => {
          this.setLoggedIn(true, this.resolveUserFromHttpResponse(response));
          return true;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(`Signin failed '${error.status} - ${error.message} (${error.error.message})'`);
          return of(false);
        })
      );
  }

  public signInWithGoogle(): Observable<boolean> {
    return from(this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)).pipe(
      map((socialUser: SocialUser): User => {
        console.log(`Received socil user from facebook: ${JSON.stringify(socialUser)}`)
        return {
          id: socialUser.id,
          firstname: socialUser.firstName,
          lastname: socialUser.lastName,
          email: socialUser.email,
          accessToken: socialUser.authToken,
          provider: socialUser.provider
        }
      }),
      map((user: User): boolean => {
        this.setLoggedIn(true, user);
        return true;
      }),
      catchError((error: any) => {
       console.log(`Signup failed '${JSON.stringify(error)}'`);
       return of(false);
     })
    )
  }
 
  public signInWithFB(): Observable<boolean>  {
    return from(this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)).pipe(
      map((socialUser: SocialUser): User => {
        console.log(`Received socil user from facebook: ${JSON.stringify(socialUser)}`)
        return {
          id: socialUser.id,
          firstname: socialUser.firstName,
          lastname: socialUser.lastName,
          email: socialUser.email,
          accessToken: socialUser.authToken,
          provider: socialUser.provider
        }
      }),
      map((user: User): boolean => {
        this.setLoggedIn(true, user);
        return true;
      }),
      catchError((error: any) => {
       console.log(`Signup failed '${JSON.stringify(error)}'`);
       return of(false);
     })
    )
  }

  /**
   * Do signin.
   *
   * POST '/auth/signup'
   *
   * @param user a User entity
   */
  public signup(user: User): Observable<boolean> {
    return this.http.post<User>(
        `${ENV.backendUrl}/auth/signup`,
        user,
        {      
          observe: 'response'
        }
    )
    .pipe(
      map(response => {
        this.setLoggedIn(true, this.resolveUserFromHttpResponse(response));
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(`Signup failed '${error.status} - ${error.message}(${error ? error.error.message : ''})'`);
        return of(false);
      })
    );
  }

  /**
   * Get current login details
   */
  public getCurrentLoginEntity(): User {
      //TODO: check for access token expiration and logout if expired
      const loginDataRaw: string = localStorage.getItem(this.CURRENT_USER);
      return loginDataRaw && JSON.parse(loginDataRaw);
  }

  /**
   * Cleanup all the stored login-related data.
   */
  public logout() {
    //TODO: find a way to check if socialAuthService has user logged in
    this.socialAuthService.signOut();

    localStorage.removeItem(this.CURRENT_USER);
    this.setLoggedIn(false);
    this.currentUserBS$.next(null);
  }

  private resolveUserFromHttpResponse(userResponse: HttpResponse<User>): User {
      let responseUser: User = userResponse.body;
      let accessJWT: string = userResponse.headers.get(this.ACCESS_TOKEN);
      let accessJWTExpStr: string = userResponse.headers.get(this.ACCESS_TOKEN_EXPIRATION);

      responseUser.accessToken = accessJWT;
      responseUser.accessTokenExpiration = accessJWTExpStr ? new Date(+accessJWTExpStr) : null;

      return responseUser;
  }

  private setLoggedIn(isLoggedIn: boolean, loginUser?: User) {
    this.loggedIn = isLoggedIn;
    if(loginUser) {
      localStorage.setItem(this.CURRENT_USER, JSON.stringify(loginUser));
      this.currentUserBS$.next(loginUser);
    }
  }
}
