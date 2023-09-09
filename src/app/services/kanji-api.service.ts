import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanjiApiService {
  private kanjiApiUrl = 'http://localhost:5000/api/kanji';
  
  constructor(private http: HttpClient) { }

  getKanji(): Observable<any> {
    return this.http.get(this.kanjiApiUrl);
  }
}
