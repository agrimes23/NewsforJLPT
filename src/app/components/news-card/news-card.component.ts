import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';
import { KanjiApiService } from 'src/app/services/kanji-api.service';
import { N4VocabService } from 'src/app/services/n4-vocab.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  newsData: any; // To store the retrieved data
  kanjiData: any;
  title: string = "Japanese News App";
  n4data: any;

  constructor(private newsService: NewsApiService, private kanjiService: KanjiApiService, private vocabService: N4VocabService) {}

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

  searchForWords(words: string[]) {
    if (!this.n4data || !Array.isArray(this.n4data)) {
      return [];
    }

    return this.n4data.filter((item: any) => {
      const textToSearch = item.propertyName.toLowerCase(); // Assuming you want to search in a property called "propertyName"

      // Check if any of the specified words exist in the text
      return words.some((word) => textToSearch.includes(word.toLowerCase()));
    });
  }


}
