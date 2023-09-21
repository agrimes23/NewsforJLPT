import { Component, OnInit, Inject } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';
import { KanjiApiService } from 'src/app/services/kanji-api.service';
import { N4VocabService } from 'src/app/services/n4-vocab.service';
import { KanjiColorPipe } from '../../pipes/kanji-color.pipe';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  newsData: any; // To store the retrieved data
  kanjiData: any;
  title: string = "Japanese News App";
  searchWords: string[] = ['word1', 'word2', 'word3'];
  searchResults: any[] = [];
  n4data: any;
  article: any;

  constructor(private newsService: NewsApiService, private kanjiService: KanjiApiService, private vocabService: N4VocabService, @Inject(KanjiColorPipe) private kanjiColorPipe: KanjiColorPipe) { }

  ngOnInit(): void {

    // getting the news on init
    this.newsService.getNewsData().subscribe((data: any) => {
      // Store the retrieved data in the newsData property
      this.newsData = data;


      console.log('News Data:', this.newsData);
    },
      (error) => {
        console.error('Error fetching news data: ', error)
      }
    );
    this.vocabService.searchWords().subscribe((data: any) => {
      this.n4data = data;
      console.log("n4 vocab within articles: ", JSON.stringify(this.n4data))
    })
  
  }

  getHighlightedDescription(article: any): { word: string, isN4: boolean }[] {
    return this.kanjiColorPipe.transform(article.description, this.searchWords);
  }

}
