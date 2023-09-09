import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private newsApiUrl = environment.newsApiUrl;

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
}
