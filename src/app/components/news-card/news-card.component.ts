import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  newsData: any; // To store the retrieved data
  title: string = "Japanese News App";
  constructor(private newsService: NewsApiService) {}

  fetchData(): void {
    this.newsService.getNewsData().subscribe((data) => {
      // Store the retrieved data in the newsData property
      this.newsData = data;
    });
  }
}
