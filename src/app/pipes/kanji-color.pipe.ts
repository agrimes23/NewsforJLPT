import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kanjiColor'
})
export class KanjiColorPipe implements PipeTransform {
  transform(value: string, kanjiWords: string[]): { word: string, isN4: boolean }[] {
    if (!value || !kanjiWords) {
      return [{ word: value, isN4: false }];
    }

    const words = value.split(/\b/).map((word) => ({
      word,
      isN4: kanjiWords.includes(word)
    }));

    return words;
  }
}