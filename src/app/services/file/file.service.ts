import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestParamsEncoder } from '../utils/service.utils';
import { environment as ENV } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private httpParams: HttpParams;

  constructor(
    private requestParamsEncoder: RequestParamsEncoder,
    private http: HttpClient
  ) { 
    this.httpParams = new HttpParams({encoder: this.requestParamsEncoder});
  }
}
