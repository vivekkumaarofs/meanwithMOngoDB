import { Injectable } from '@angular/core';

@Injectable()
export class CommunicateService {

  name: string;
  constructor() { }

  getName() {
    return this.name;
  }

  setName(name) {
   this.name = name;
  }

}
