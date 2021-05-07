import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';
import { RequestParamsEncoder } from '../utils/service.utils';
import { map, catchError } from 'rxjs/operators';
import { DietsItemsPaged } from 'src/app/interfaces/DietsItemsPaged';
import { DietsItem } from 'src/app/interfaces/DietsItem';

@Injectable({
  providedIn: 'root'
})
export class DietsService {
  DIETS_ENDPOINT_BASE: string = `${ENV.backendUrl}/diets`;

  private httpParams: HttpParams;

  constructor(
    private requestParamsEncoder: RequestParamsEncoder,
    private http: HttpClient
  ) 
  { 
    this.httpParams = new HttpParams({encoder: this.requestParamsEncoder});
  }

  public getDietsPaged(page: number, pageSize: number): Observable<DietsItemsPaged> {
    return this.http.get<DietsItemsPaged>(
        this.DIETS_ENDPOINT_BASE,
        {
          params: this.httpParams.set('page', `${page}`)
                                 .set('limit', `${pageSize}`),
          observe: 'response'
        }
    )
    .pipe(
      map(response => response.body),
      catchError((error: HttpErrorResponse) => {
        console.log(`getDietsPaged failed: '${error.status} - ${error.message}'`);
        return EMPTY;
      })
    );
  }

  
  /**
   * Get single news details.
   */
  public getDietFull(id: string): Observable<DietsItem> {
    return this.http.get<DietsItem>(
      `${this.DIETS_ENDPOINT_BASE}/${id}`,
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
}
