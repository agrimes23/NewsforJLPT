import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class N4VocabService {

  private kanjiWordsUrl = 'http://localhost:5000/api/search';
  constructor(private http: HttpClient) {}

  // Update this method to send searchWords to the backend
  searchWords() {
    return this.http.get(this.kanjiWordsUrl);
  }

}
