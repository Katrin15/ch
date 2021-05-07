import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { RecommendationItem } from 'src/app/interfaces/RecommendationItem';
import { RecommendationItemsPaged } from 'src/app/interfaces/RecommendationItemsPaged';
import { Observable, EMPTY } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';
import { RequestParamsEncoder } from '../utils/service.utils';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  RECOMMENDATIONS_ENDPOINT_BASE: string = `${ENV.backendUrl}/recommended`;

  private httpParams: HttpParams;

  constructor(
    private requestParamsEncoder: RequestParamsEncoder,
    private http: HttpClient
  ) 
  { 
    this.httpParams = new HttpParams({encoder: this.requestParamsEncoder});
  }

  /**
   * Get list of.
   */
  public getRecommendationsPreviewPaged(page: number, pageSize: number): Observable<RecommendationItemsPaged> {
    return this.http.get<RecommendationItemsPaged>(
      this.RECOMMENDATIONS_ENDPOINT_BASE,
      {
        params: this.httpParams.set('page', `${page}`)
                               .set('limit', `${pageSize}`),
        observe: 'response'
      }
    ).pipe(
      map(response => response.body),
      //TODO: standartize some of the basic information to be able to cast all the feed elements to FeedBaseItem and use
      //it in a common component
      map((items: RecommendationItemsPaged) => {
        items.items.forEach(item => {
          if(item.picture) {
            item.picture.is_preview = true;
            item.pictures = [item.picture]
          }
        })
        return items
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(`getNewsPreviewPaged failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }

  /**
   * Get full news details.
   */
  public getRecommendationFull(id: string): Observable<RecommendationItem> {
    return this.http.get<RecommendationItem>(
      `${this.RECOMMENDATIONS_ENDPOINT_BASE}/${id}`,
      {      
        observe: 'response'
      }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getRecommendationFull failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }

  //   /**
  //  * Get top recommendations.
  //  */
  // public getTopRecommendations(page?: number, pageSize?: number, mockResponse?: boolean): Observable<NewsItemsPaged> {
  //   // Mock response
  //   if(mockResponse) {
  //     return of(this.MOCK_RECOMMENDATIONS_SINGLE);
  //   }

  //   return this.http.get<RecommendationItemsPaged>(
  //       `${this.RECOMMENDATIONS_ENDPOINT_BASE}`,
  //       {    
  //         params: this.httpParams.set('page', `${page || 1}`)
  //                                .set('limit', `${pageSize || 5}`)
  //                                .set('sort', 'popular'),  
  //         observe: 'response'
  //       }
  //   )
  //   .pipe(
  //     map(response => response.body),
  //     catchError((error: HttpErrorResponse) => {
  //       console.log(`getTopRecommendations failed: '${error.status} - ${error.message}'`);
  //       return EMPTY;
  //     })
  //   );
  // }
}
