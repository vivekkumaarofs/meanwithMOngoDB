import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformLanguage'
})
export class TransformLanguagePipe implements PipeTransform {
  public languageSet = {
    'ENGLISH' : {
      'HI' : 'hi',
      'TABLE' : 'TABLE'
    },
    'TAMIL' : {
      'HI' : 'VANAKAM',
      'TABLE' : 'KATTAM'
    }
  };

  transform(value: any, args?: any): any {

    const language = localStorage.getItem('language');
    if (this.languageSet[language][value]) {
      return this.languageSet[language][value];
    }
  }

}
