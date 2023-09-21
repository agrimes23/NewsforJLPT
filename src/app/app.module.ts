import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { KanjiColorPipe } from './pipes/kanji-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    KanjiColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
