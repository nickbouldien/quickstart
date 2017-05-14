import { Component } from '@angular/core';

//decorator below
@Component({
  selector: 'bs-app',
  template:`
    <h1> {{pageTitle}} </h1>
    <div>App Component Test</div>
    <bs-welcome></bs-welcome>
    `
})
export class AppComponent  {
  pageTitle: string = "Nick Book Store"
}
