import { Directive, ElementRef , HostListener , HostBinding} from '@angular/core';
// decorator meaning is function override
@Directive({
  selector: '[appHightlight]'
})

export class HightlightDirective {

  @HostBinding('style.color') forgroundColor = 'red';

  constructor(private elref: ElementRef) {
    console.log('called from directive', elref);
    // this.elref.nativeElement.style.color = 'red';
    this.forgroundColor = 'blue';
  }

  @HostListener('click', ['$event.target'])
  onchangeData(test) {
    test.style.color = 'red';
    console.log('sdfsd', this.forgroundColor);
  }


}
