import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../common/api.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  dataArray: any;
  public end = 10;
  public initial = 0;
  public pagesize = 10;
  public page = 0;
  public title = 'HomE';
  constructor( private api: ApiService) {
    this.title = 'CHeesAI';
    // this.httpClient.get('../../../assets/data.json').subscribe(
    //   data => {
    //     console.log(data);
    //      this.dataArray = data;
    //   }
    // );

      this.api.get('comments').subscribe(data => {
        this.dataArray = data;
      });

  }

  changepagelimit(events: any) {
    this.pagesize = events;
    this.changepage(this.pagesize);
  }
  public previous (): void {
//  this.initial = this.initial  - this.pagesize;
//  this.end = this.end - this.pagesize;
if (this.page > 0 ) {
  this.changepage(this.page - 1);
}
}

public next(): void {
  // if (this.page !== -1 ) {
    this.changepage(this.page + 1);
  // }
}
public changepage(page: number): void {
  this.page = page;
  this.initial = (this.page * this.pagesize);
  this.end = (this.page * this.pagesize) + this.pagesize;
}

   popValue(index: number) {
          this.dataArray.splice(index, 1);
  }

  ngOnInit() {
  }

}
