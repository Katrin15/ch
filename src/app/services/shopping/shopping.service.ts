import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';
import { RequestParamsEncoder } from '../utils/service.utils';
import { map, catchError } from 'rxjs/operators';
import { AnnouncementItemsPaged } from 'src/app/interfaces/AnnouncementItemsPaged';
import { Announcement } from 'src/app/interfaces/Announcement';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ANNOUNCEMENT_ENDPOINT_BASE: string = `${ENV.backendUrl}/announcement`;

  private httpParams: HttpParams;

  constructor(
    private requestParamsEncoder: RequestParamsEncoder,
    private http: HttpClient
  ) { 
    this.httpParams = new HttpParams({encoder: this.requestParamsEncoder});
  }

  /**
   * Get paged list of announcements
   */
  public getAnnouncementsPaged(page: number, pageSize: number): Observable<AnnouncementItemsPaged> {
    return this.http.get<AnnouncementItemsPaged>(
        this.ANNOUNCEMENT_ENDPOINT_BASE,
        {
          params: this.httpParams.set('page', `${page}`)
                                 .set('limit', `${pageSize}`),
          observe: 'response'
        }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getAnnouncementsPaged failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }

  /**
   * Get single announcement.
   */
  public getAnnouncement(id: string): Observable<Announcement> {
    return this.http.get<Announcement>(
      `${this.ANNOUNCEMENT_ENDPOINT_BASE}/${id}`,
      {      
        observe: 'response'
      }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getAnnouncement failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }
}
