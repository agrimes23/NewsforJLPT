import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';
import { KanjiApiService } from 'src/app/services/kanji-api.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  newsData: any; // To store the retrieved data
  kanjiData: any;
  title: string = "Japanese News App";

  constructor(private newsService: NewsApiService, private kanjiService: KanjiApiService) {}

  ngOnInit(): void {
    this.newsService.getNewsData().subscribe((data) => {
      // Store the retrieved data in the newsData property
      this.newsData = data;
      console.log('News Data:', this.newsData);
    },
      (error) => {
        console.error('Error fetching news data: ', error)
      }
    );
  }

  onButtonClick(selectedLevel: number): void {
    this.kanjiService.getKanjiByLevel(selectedLevel).subscribe(
      (data) => {
        this.kanjiData = data;
        console.log('Kanji Data', this.kanjiData);
      },
      (error) => {
        console.error('Error fetching kanji data', error);
      }
    )
  }

}
