import { Component, OnInit } from '@angular/core';
import {CommunicateService} from '../../common/communicate.service';
@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {

  constructor(private communicate: CommunicateService) { }

  ngOnInit() {

  }

  getNameByClicking() {
    console.log(this.communicate.getName());
  }

}
