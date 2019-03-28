import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-test1',
  template: `
    Name: <input #myInput [id]= "myid" type = "text">
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public name = 'Robee';
  public myid = '6969';
  public myID = 'rob';

  constructor() { }

  ngOnInit() {
  }
  logMessage(value) {
    console.log(value);
  }
}
