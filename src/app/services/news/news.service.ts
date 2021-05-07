import { Injectable } from '@angular/core';
import { NewsItem } from 'src/app/interfaces/NewsItem';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { NewsItemsPaged } from 'src/app/interfaces/NewsItemsPaged';
import { environment as ENV } from '../../../environments/environment';
import { RequestParamsEncoder } from '../utils/service.utils';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  NEWS_ENDPOINT_BASE: string = `${ENV.backendUrl}/news`;

  private httpParams: HttpParams;

  constructor(
    private requestParamsEncoder: RequestParamsEncoder,
    private http: HttpClient
  ) 
  { 
    this.httpParams = new HttpParams({encoder: this.requestParamsEncoder});
  }

  /**
   * Get paged list of recent.
   */
  public getNewsPreviewPaged(page: number, pageSize: number): Observable<NewsItemsPaged> {
    return this.http.get<NewsItemsPaged>(
        this.NEWS_ENDPOINT_BASE,
        {
          params: this.httpParams.set('page', `${page}`)
                                 .set('limit', `${pageSize}`),
          observe: 'response'
        }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getNewsPreviewPaged failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }

  /**
   * Get single news details.
   */
  public getNewsFull(id: string): Observable<NewsItem> {
    return this.http.get<NewsItem>(
      `${this.NEWS_ENDPOINT_BASE}/${id}`,
      {      
        observe: 'response'
      }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getNewsFull failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }
  
  /**
   * Get top news.
   */
  public getTopNews(page?: number, pageSize?: number): Observable<NewsItemsPaged> {
    return this.http.get<NewsItemsPaged>(
        `${this.NEWS_ENDPOINT_BASE}`,
        {    
          params: this.httpParams.set('page', `${page || 1}`)
                                 .set('limit', `${pageSize || 5}`)
                                 .set('sort', 'popular'),  
          observe: 'response'
        }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getTopNews failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }

  /**
   * Get news list by query
   */
  public findNews(query: string): Observable<NewsItemsPaged> {
    return this.http.get<NewsItemsPaged>(
        `${this.NEWS_ENDPOINT_BASE}/${query}`,
        {      
          observe: 'response'
        }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getNewsPreviewPaged failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }
}
