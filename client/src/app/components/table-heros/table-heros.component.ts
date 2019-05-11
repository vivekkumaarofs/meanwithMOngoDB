import { Component, OnInit } from '@angular/core';
import {CommunicateService} from '../../common/communicate.service';

@Component({
  selector: 'app-table-heros',
  templateUrl: './table-heros.component.html',
  styleUrls: ['./table-heros.component.css']
})
export class TableHerosComponent implements OnInit {

  constructor(private communicate: CommunicateService) { }

  ngOnInit() {
  }
  public setClickingByName(event) {

    this.communicate.setName('event');
  }
}
