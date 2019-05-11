import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public success: boolean;
  public defaultUserName = 'asdfsd';
  public myArray: any[];
  public name: number;
  constructor() {
    this.myArray = [{ 'id': '1', 'Name': 'vivek' }, { 'id': '1', 'Name': 'vivek' },
    { 'id': '1', 'Name': 'vivek' },
    ];
  }

  ngOnInit() {
    this.success = true;
  }
  login(sdfsdf: any) {
    this.success = !this.success;
    console.log('sdfsd', sdfsdf);
  }

  getPopVALUE(getValue: any) {
    const getindex: any = this.myArray.indexOf(getValue);
    this.myArray.splice(getindex, 1);
  }

  addData() {
    const newItem = {
      id: this.myArray.length + 1,
      Name: this.name
    };
    this.myArray.push(newItem);
  }

}
