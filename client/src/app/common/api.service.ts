import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  bindOrigin(url: string) {
    return 'http://localhost:3000/' + url;
  }

  get(url: string) {
    const newurl = this.bindOrigin(url);
    return this.http.get(newurl);
  }


}
