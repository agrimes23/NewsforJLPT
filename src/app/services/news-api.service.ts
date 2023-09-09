import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private newsApiUrl = 'http://localhost:5000/api/news';

  constructor(private http: HttpClient) {}

  getNewsData(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
}
