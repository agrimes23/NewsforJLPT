import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class N4VocabService {

  constructor(private http: HttpClient) { }

  getN4Data() {
    return this.http.get('/vocab/n4data');
  }

}
