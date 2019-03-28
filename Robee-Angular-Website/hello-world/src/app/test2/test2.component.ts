import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-test2]',
  template: `
  <div>
  Inline Template in test 2
  </div>
  <h2 [style.color]="'orange'">Just added 2 and 2 which gives---> {{2+2}}</h2>
  <h1 [style.color]="hasError ? 'red' :(isSpecial ? 'green' : 'orange') ">{{"Welcome "+ name}}</h1>
  <h2 [ngStyle]="robStyles">The length of the name {{name}} is {{name.length}}</h2>
  <p>{{greetUser()}}</p>
  <button (click)="onClick($event)">Greet Back</button><br>
  {{greeting}}
  `,
  styles: [`
  div{
    color: red;
  }
  `]
})
export class Test2Component implements OnInit {

  public name = 'rob93ghosh';
  public hasError = false;
  public isSpecial = true;
  public robStyles = {
    color: 'blue',
    fontStyle: 'italic'
  // tslint:disable-next-line:semicolon
  }
  public greeting = '';
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event) {
    console.log(event, event.type);
    this.greeting = 'Hello I am Robee';
  }

}
