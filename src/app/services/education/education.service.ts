import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { EducationPathItem } from 'src/app/interfaces/EducationPathItem';
import { EducationPathItemsPaged } from 'src/app/interfaces/EducationPathItemsPaged';
import { environment as ENV } from '../../../environments/environment';
import { RequestParamsEncoder } from '../utils/service.utils';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  EDUCATION_ENDPOINT_BASE: string = `${ENV.backendUrl}/education`;
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
  public getEducationPathItmesPaged(page: number, pageSize: number): Observable<EducationPathItemsPaged> {
    return this.http.get<EducationPathItemsPaged>(
      this.EDUCATION_ENDPOINT_BASE,
      {
        params: this.httpParams.set('page', `${page}`)
                               .set('limit', `${pageSize}`),
        observe: 'response'
      }
    ).pipe(
      map(response => response.body),
      //TODO: standartize some of the basic information to be able to cast all the feed elements to FeedBaseItem and use
      //it in a common component
      map((items: EducationPathItemsPaged) => {
        items.items.forEach(item => {
          item.preview = item.description;
        })
        return items
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(`getEducationPathItemsPaged failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    ); 
  }

  /**
   * Get full news details.
   */
  public getEducationPath(id: string): Observable<EducationPathItem> {
    return this.http.get<EducationPathItem>(
      `${this.EDUCATION_ENDPOINT_BASE}/${id}`,
      {      
        observe: 'response'
      }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getEducationPath failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }
}
