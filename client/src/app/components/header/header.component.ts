import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public selectLanguage(event: any) {
    location.reload();
      localStorage.setItem('language', event.target.value);
  }
}
